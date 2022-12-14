<script>
import { defineAsyncComponent } from 'vue'
  export default{
    name: 'App',
    components: {
    Counter: defineAsyncComponent(() => import("./components/Counter.vue")),
}
  }
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Counter/>
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    flex-direction: column;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
  }
}
</style>
