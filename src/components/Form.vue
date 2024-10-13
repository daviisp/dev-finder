<script setup lang="ts">
  import { useProfileStore } from "@/stores/userGitHubStore"
  import SearchIcon from "./icons/SearchIcon.vue"
  import { ref } from "vue"

  const userProfileGitHub = useProfileStore()
  const searchInput = ref("")
</script>

<template>
  <form @submit.prevent="userProfileGitHub.getGithubUser(searchInput)">
    <input
      type="text"
      placeholder="Digite o nome de um usuário"
      v-model="searchInput"
    />
    <button type="submit">
      <SearchIcon />
    </button>
  </form>
</template>

<style scoped lang="scss">
  form {
    display: flex;
    align-items: center;
    gap: 10px;

    .icon {
      width: 25px;
      height: 25px;
    }

    input {
      border: none;
      padding: 8px 12px;
      border-radius: 10px;
      outline: none;
      min-height: 35px;
      font-size: 14px;
      min-width: 210px;
    }

    button {
      border: none;
      border-radius: 10px;
      width: 30px;
      height: 30px;
      color: #2b3566;
      cursor: pointer;
      transition: 0.3;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 401px) {
    form input {
      padding: 6px 10px;
    }
  }
</style>
