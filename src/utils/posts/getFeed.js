import axios from 'axios'
const url_prod = 'https://typeorm-apirest.onrender.com'

export const getFeed = async () => {
  try {
    const response = await axios.get(`${url_prod}/api/posts`)
    return response.data.success ? { error: false, data: response.data } : { error: true, data: response.data }
  } catch (error) {
    return { error: true, data: error.response.data }
  }
}
