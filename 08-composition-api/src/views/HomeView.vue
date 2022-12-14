
<template>
  <main>
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
    </header>
    <h1>Reactive vs Ref</h1>
   <p>{{ironman}}</p>
   <p>{{hulk}}</p>
   <button @click="changeIronman">Cambiar Ironman</button>
   <button @click="changeHulk">Cambiar Hulk></button>
  </main>
</template>
<script>
import { reactive, ref } from 'vue';

export default {
  name: 'Home',
  setup(){
    const ironman = ref({name: 'Tony', age: 50})
    const hulk = reactive({name: 'Bruce', age: 50})
    return{
      ironman,
      hulk,
      changeIronman: ()=>{
        ironman.value.name = 'Tony Stark',
        ironman.value.age = '55'
      },
      //reactive solo funciona con objetos
      changeHulk: ()=>{
        hulk.name = 'Bruce Banner',
        hulk.age = ' 45'
      }
    }
  }
}
</script>
<style scoped>
* {
  text-align: center;
}
</style>
