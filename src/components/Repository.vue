<script setup lang="ts">
  import RepositoryIcon from "@/components/icons/RepositoryIcon.vue"
  import StarIcon from "@/components/icons/StarIcon.vue"
  import ForkIcon from "@/components/icons/ForkIcon.vue"
  import { defineProps } from "vue"

  defineProps<{
    repository: {
      name: string
      language: string
      stargazers_count: number
      forks_count: number
      html_url: string
    }
  }>()
</script>

<template>
  <div class="content">
    <h3 class="title">{{ repository.name }}</h3>
    <p>< /> {{ repository.language }}</p>
    <div class="status">
      <div class="status-count">
        <div class="icon-container">
          <StarIcon />
        </div>
        <p>{{ repository.stargazers_count }}</p>
      </div>
      <div class="status-count">
        <div class="icon-container">
          <ForkIcon />
        </div>
        <p>{{ repository.stargazers_count }}</p>
      </div>
    </div>
    <a :href="repository.html_url" target="_blank">
      <button type="button">
        Ver repositório
        <RepositoryIcon />
      </button>
    </a>
  </div>
</template>

<style scoped lang="scss">
  .content {
    padding: 16px;
    background-color: #0e1129;
    border: 2px solid #9da5d1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    max-width: 300px;

    .title {
      font-weight: 700;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 25px;
      padding: 20px 0;

      .status-count {
        border: 1px solid #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        min-width: 40px;
        min-height: 20px;

        .icon-container {
          background-color: #4ed8c7;
        }
      }
    }
    a {
      text-decoration: none;
    }

    button {
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      background-color: #2b3566;
      color: #9ad5d1;
      border-radius: 8px;
      padding: 10px 15px;
      font-size: 16px;
    }
  }
</style>
