<template>
  <h1 v-if="!pokemon">Espere...</h1>
  <div v-else>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true
      this.showAnswer = true
      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto, es "${this.pokemon.name}`
      } else {
        this.message = `No, es el pokemon "${this.pokemon.name}"`
      }
    },
    newGame(){
      this.pokemonArr= []
      this.showPokemon = false
      this.showAnswer = false
      this.pokemon = null
      this.mixPokemonArr()
    }
  },
  mounted() {
    this.mixPokemonArr()
  },
}
</script>
<style scoped>
h1, h2 {
  color: black;
}
h2{
  margin-top: 0;
}
</style>
