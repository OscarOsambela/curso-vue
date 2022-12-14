<template>
  <div class="template-container">
    <h1>Counter view</h1>
    <h2>{{ counter }}</h2>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
    <button @click="increase5">+5</button>
  </div>
</template>

<script>
import useCounter from '@/composables/useCounter'
export default {
  name: 'Counter',
  props: {},
  emits: [],
  setup() {
    const { counter, decrease, increase, increase5 } = useCounter(25)
    return {
      counter,
      decrease,
      increase,
      increase5,
    }
  },
}
</script>

<style scoped>
.template-container {
  text-align: center;
}
</style>
