<template>
  <h1>Buscar pokemon: {{pokemonId}}</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Número del pokemon"
      autofocus
      v-model="pokemonId"
      min="1"
    />
    <button @click="onSubmit">Aceptar</button>
  </form>
  <br />
  <span>Presion enter para buscar</span>
</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const pokemonId = ref(1)
    return {
      pokemonId,
      onSubmit: ()=>{
        router.push({name: 'pokemon-id', params: {id: pokemonId.value}})
      }
    }
  },
}
</script>

<style></style>
