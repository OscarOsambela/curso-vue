<script>
import { defineAsyncComponent } from 'vue'

export default{
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(()=> import('@/modules/shared/components/Navbar.vue'))
  }
}
</script>

<template>
  <Navbar />
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <div class="wrapper">
      <router-view />
    </div>
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
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
