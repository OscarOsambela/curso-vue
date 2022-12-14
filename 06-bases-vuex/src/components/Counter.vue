<template>
  <h1>Counter - vuex</h1>
  <h2>direct access: {{ $store.state.counter.count }}</h2>
  <div>
    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">random</button>
  </div>
  <h1>MapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
  <h2>direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState('counter',['count', 'lastMutation', 'isLoading']),
  methods: {
    increment() {
      this.$store.commit('counter/increment')
    },
    incrementBy() {
      this.$store.commit('counter/incrementBy', 5)
    },
    ...mapActions('counter', ['incrementRandomInt'])
  }
}
</script>

<style scoped>
* {
  text-align: center;
}
</style>
