import axios from "axios"

const MovieInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
export {MovieInstance}