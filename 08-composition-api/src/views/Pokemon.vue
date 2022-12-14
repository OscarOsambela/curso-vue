<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando</h1>
  <h1 v-else-if="errorMessage">{{errorMessage}}</h1>
  <template v-else>
    <h3>{{pokemon.name}}</h3>
    <img :src="pokemon.sprites.front_default" alt="pokemon.name">
    <br>
    <RouterLink :to="{name: 'pokemon-search'}">Regresar</RouterLink>
  </template> 
</template>

<script>
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '@/composables/usePokemon'
import { watch } from 'vue'

export default {
  setup() {
    const route = useRoute()
    console.log(route.params.id);
    const { pokemon, isLoading, errorMessage,searchPokemon } = usePokemon(route.params.id)

    watch(
        ()=> route.params.id,
        ()=> searchPokemon(route.params.id)
    )
    //bloquear la salida de una ruta
    onBeforeRouteLeave(()=>{
        const answer = window.confirm('Está seguro de salir?')
        if(!answer) return false
    })
    return { pokemon, isLoading, errorMessage, searchPokemon }
  }
}
</script>

<style scoped>
    h3{
        text-transform: uppercase;
    }
    img{
        width: 150px;
    }
</style>
