import axios from 'axios'
const url_prod = 'https://typeorm-apirest.onrender.com'

export const createPost = async (postData) => {
    const { title, content } = postData
    const token = localStorage.getItem('token')
    if (!token) return { error: true, data: 'No existe un token' }
    if (!title || !content) {
        return { error: true, data: 'Faltan campos a completar.' }
    } else {
        try {
            const response = await axios.post(`${url_prod}/api/posts/create-post`, postData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            return { error: false, data: response.data }
        } catch (error) {
            return { error: true, data: error.response.data }
        }
    }

}
