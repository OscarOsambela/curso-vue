<script setup>
//import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue';
import './assets/css/animation.css';
import './assets/css/styles.css'
import PokemonPage from './pages/PokemonPage.vue'


</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <Counter title="Entraron" :start="3" />
      <Counter title="Salieron" :start="2" />
      <Counter/> -->
      <!-- <Indecision/> -->
      <PokemonPage/>
</div>
  </header>

  <main></main>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
