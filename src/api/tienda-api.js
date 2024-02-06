import axios from "axios";

const tiendaApi = axios.create({
  baseURL: '/api'
})

export default tiendaApi