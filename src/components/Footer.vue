<template>
  <footer>
    <p>Feito por</p>
    <a href="https://github.com/daviisp" target="_blank">@daviisp</a>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5px;
    min-height: 50px;
    position: absolute;
    bottom: 0;

    p {
      font-size: 16px;
    }

    a {
      text-decoration: none;
      color: #9ad5d1;
    }
  }
</style>
