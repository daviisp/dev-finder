<script setup lang="ts">
  import LocationIcon from "@/components/icons/LocationIcon.vue"
  import { useProfileStore } from "@/stores/userGitHubStore"

  const userProfile = useProfileStore()
</script>

<template>
  <div class="container">
    <div v-if="userProfile.user.login" class="content">
      <img :src="userProfile.user.avatar_url" :alt="userProfile.user.login" />
      <div class="about">
        <h2>{{ userProfile.user.name }}</h2>
        <p>@{{ userProfile.user.login }}</p>
      </div>
      <p class="location">
        <LocationIcon />
        {{ userProfile.user.location }}
      </p>
      <div class="status">
        <div>
          <p>Seguidores</p>
          <p class="status-count">{{ userProfile.user.followers }}</p>
        </div>
        <div class="border" />
        <div>
          <p>Seguindo</p>
          <p class="status-count">{{ userProfile.user.following }}</p>
        </div>
      </div>
      <RouterLink :to="`/repositories/${userProfile.user.login}`">
        <button type="button">Ver melhores repositórios</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    background-color: #2b3566;
    border-radius: 16px;
    max-width: 450px;
    margin: 30px auto;
    padding: 0px 30px;

    .content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      .about {
        text-align: center;
      }

      .location {
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 700;
        color: #9da5d1;
      }

      button {
        background-color: #644aff;
        padding: 16px;
        border-radius: 8px;
        border: none;
        color: #fff;
        font-size: 16px;
        margin: 10px 0;
        cursor: pointer;
        opacity: 0.8;
        transition: 0.4s;
        margin: 20px 0;

        &:hover {
          opacity: 1;
        }
      }

      .status {
        display: flex;
        gap: 15px;
        margin-top: 5px;

        .border {
          border: 1px solid #fff;
        }

        .status-count {
          background-color: #4ed8c7;
          padding: 3px 4px;
          border-radius: 3px;
          text-align: center;
          margin-top: 5px;
        }
      }
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 100%;
      border: 4px solid #644aff;
      margin: 20px 0;
    }
  }

  @media screen and (max-width: 480px) {
    .container {
      h2 {
        font-size: 22px;
      }

      p {
        font-size: 14px;
      }

      button {
        font-size: 14px;
      }
    }
  }
</style>
