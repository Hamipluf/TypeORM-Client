import axios from 'axios'

export const register = async (loginData) => {
    const { password, confirm_password, email, first_name, last_name } = loginData
    console.log(password, confirm_password, email, first_name, last_name)
    if (!password || !confirm_password || !email || !first_name || !last_name) return { error: true, data: 'Todos los campos son obligatorios' }
    if (password !== confirm_password) {
        return { error: true, data: 'Las contraseñas no coinciden' }
    } else {
        try {
            const response = await axios.post(`${url_prod}/api/users/create-user`, { password, email, first_name, last_name })
            return { error: false, data: response.data }
        } catch (error) {
            return { error: true, data: error.response.data }
        }
    }
}
