<template>
  <header class="container">
    <h1>Dev Finder</h1>
  </header>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: center;
    padding-top: 30px;

    h1 {
      font-weight: 700;
      font-size: 30px;
    }
  }

  @media screen and (max-width: 550px) {
    .container {
      h1 {
        font-size: 28px;
      }
    }
  }
</style>
