import axios from 'axios'
const request = axios.create({
  baseURL: '/xativa/v1/client',
  timeout: 10000
})

export default request
