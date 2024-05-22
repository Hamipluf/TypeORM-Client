import axios from 'axios'
const url_prod = 'https://typeorm-apirest.onrender.com'

export const getCurrent = async (loginData) => {
    const token = localStorage.getItem('token')
  if (!token) return { error: true, data: 'No existe un token' }
  try {
    const response = await axios.get(`${url_prod}/api/users/current`, {
        headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return { error: false, data: response.data }
  } catch (error) {
    return { error: true, data: error.response.data }
  }
}
