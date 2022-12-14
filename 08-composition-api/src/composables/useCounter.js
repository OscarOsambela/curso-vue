import { ref } from "vue"

const useCounter = (initialValue = 5)=>{
    const counter = ref(initialValue)
    const counter5 = 5
    // const increase = () => {
    //   counter.value++
    // }
    // const decrease = () => {
    //   counter.value--
    // }
    return {
      counter,
      increase: () => counter.value++,
      increase5: () => counter.value = counter.value + counter5 ,
      decrease: () => counter.value--,
    }
}

export default useCounter