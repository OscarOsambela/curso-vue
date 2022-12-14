<template>
  <div class="pokemon-container">
    <img class="hidden-pokemon" :src="imgSrc" alt="pokemon" />
    <img class="fade-in" :src="imgSrc" alt="pokemon" v-if="showPokemon"/>
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    },
  },
}
</script>
