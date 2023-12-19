import api from './api.services'

export class ForgotService {
  static async forgot({ email }) {
    try {
      const { data, status } = await api.post(`/users/forgot/`, {
        email: email,
      })
      if (status === 200) {
        return data
      }
    } catch (error) {
      throw new Error('Error en el servidor ')
    }
  }
}
