import type { Repository } from "@/entities/repository-entity"
import type { User } from "@/entities/user-entity"
import { defineStore } from "pinia"
import { reactive, ref } from "vue"

export const useProfileStore = defineStore("gitHubProfile", () => {
  const user: User = reactive({
    name: "",
    avatar_url: "",
    followers: 0,
    following: 0,
    location: "",
    login: "",
    notFound: false,
  })

  const repos = ref<Repository[]>([])

  const isLoading = ref<boolean>(false)

  async function getGithubUser(username: string) {
    isLoading.value = true

    const response = await fetch(`https://api.github.com/users/${username}`)
    if (response.status === 404) {
      user.notFound = true
      user.name = ""
      user.avatar_url = ""
      user.followers = null
      user.following = null
      user.location = ""
      user.login = ""

      isLoading.value = false

      return
    }

    const { name, login, avatar_url, followers, following, location } =
      await response.json()

    Object.assign(user, {
      name,
      avatar_url,
      followers,
      following,
      location,
      login,
    })

    isLoading.value = false
  }

  async function getRepositorysUser(username: string) {
    isLoading.value = true
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    )

    if (!response.ok) {
      return
    }

    const data = await response.json()

    const sortedData = data.sort(
      (a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count
    )

    const topFive = sortedData.slice(0, 5)

    repos.value = topFive as Repository[]

    isLoading.value = false
  }

  return { user, repos, getGithubUser, getRepositorysUser, isLoading }
})
