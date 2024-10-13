<script setup lang="ts">
  import Repository from "@/components/Repository.vue"
  import { useProfileStore } from "@/stores/userGitHubStore"
  import { onMounted } from "vue"
  import { useRoute } from "vue-router"

  const route = useRoute()
  const userProfile = useProfileStore()

  onMounted(() => {
    userProfile.getRepositorysUser(route.params.user as string)
    document.title = `Repositórios - ${route.params.user as string}`
  })
</script>

<template>
  <RouterLink to="/">
    <button class="back-button">Voltar</button>
  </RouterLink>
  <div class="container">
    <Repository
      v-for="repository in userProfile.repos"
      :key="repository.html_url"
      :repository="repository"
    />
  </div>
</template>

<style scoped lang="scss">
  .container {
    background-color: #2b3566;
    max-width: 550px;
    margin: 30px auto;
    padding: 16px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .back-button {
    position: absolute;
    top: 10px;
    left: 10px;
    border: none;
    background-color: #2b3566;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    padding: 8px 16px;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 0px 30px;

      h3 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }
  }
</style>
