import axios from 'axios'
const url_prod = 'https://typeorm-apirest.onrender.com'

export const login = async (loginData) => {
  const { password, email } = loginData
  if (!password || !email) return { error: true, data: 'Todos los campos son obligatorios' }
  try {
    const response = await axios.post(`${url_prod}/api/users/login`, { password, email })
    return { error: false, data: response.data }
  } catch (error) {
    return { error: true, data: error.response.data }
  }
}
