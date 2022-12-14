import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-9b577-default-rtdb.firebaseio.com'
})

export default journalApi