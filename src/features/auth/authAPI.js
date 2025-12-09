import axios from '/src/api/axiosInstant.js'

export const loginAPI = (credentials) => axios.post('/auth/login', credentials)
export const getUserAPI = () => axios.get(`/user`)
export const registerAPI = (data) => axios.post('/register', data)