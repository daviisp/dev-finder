<template>
  <div class="spinner-container">
    <svg
      class="spinner"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1.5em"
      height="1.5em"
    >
      <path
        class="spinner-path"
        d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
      />
    </svg>
  </div>
</template>

<style lang="scss">
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }

  .spinner {
    fill: none;
    stroke: #fff;
    stroke-width: 10;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: spin 2s linear infinite, draw 3s ease forwards;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes draw {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
</style>
