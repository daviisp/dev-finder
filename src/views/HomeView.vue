<script setup lang="ts">
  import Form from "@/components/Form.vue"
  import LoadingIcon from "@/components/icons/LoadingIcon.vue"
  import UserProfile from "@/components/UserProfile.vue"

  import { useProfileStore } from "@/stores/userGitHubStore"

  const userProfile = useProfileStore()
</script>

<template>
  <section class="container">
    <div class="content">
      <h2>Busque por um usuário:</h2>
      <p>Conheça os melhores repositórios</p>
      <Form />
      <p v-if="userProfile.user.notFound" class="user-not-found">
        Usuário não encontrado
      </p>
    </div>
  </section>

  <LoadingIcon v-if="userProfile.isLoading" />
  <div v-if="userProfile.user.login" class="user-profile-container">
    <UserProfile />
  </div>
</template>

<style scoped lang="scss">
  .container {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 30px;

    .content {
      padding: 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      background-color: #2b3566;
      border-radius: 16px;

      .user-not-found {
        color: #fff;
      }

      h2 {
        text-align: center;
      }

      p {
        color: #9ad5d1;
        text-align: center;
      }
    }
  }

  .user-profile-container {
    max-width: 500px;
    margin: 30px auto;
    padding: 0px 30px;
  }

  @media screen and (max-width: 550px) {
    .content {
      h2 {
        font-size: 22px;
      }

      p {
        font-size: 15px;
      }
    }
  }

  @media screen and (max-width: 401px) {
    .content {
      h2 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 360px) {
    .content {
      h2 {
        font-size: 18px;
      }

      p {
        font-size: 13px;
      }
    }
  }
</style>
