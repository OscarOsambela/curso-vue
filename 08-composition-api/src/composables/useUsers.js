import { ref } from "vue"
import axios from 'axios'

const useUsers = ()=>{
    const users = ref([])
    const isLoading = ref(true)
    const currentPage = ref(1)
    const errorMessage = ref()
    const getUsers = async (page = 1) => {
      if (page <= 0) page = 1
      isLoading.value = true
      const res = await axios.get('https://reqres.in/api/users', {
        params: {
          page,
        },
      })
      //   console.log(res)
      //   console.log(res.data.data)
      if (res.data.data.length > 0) {
        users.value = res.data.data
        currentPage.value = page
        errorMessage.value = null
      } else if (currentPage.value > 0) {
        errorMessage.value = 'No hay usuarios.'
      }
      isLoading.value = false
    }
    getUsers()
    return {
      currentPage,
      errorMessage,
      isLoading,
      users,

      nextPage: () => getUsers(currentPage.value + 1),
      previousPage: () => getUsers(currentPage.value - 1),
    }
}

export default useUsers