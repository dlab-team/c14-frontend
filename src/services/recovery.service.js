import api from './api.services'

export class RecoveryService {
  static async recovery({ password, token }) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      const { data, status } = await api.put("users/recover", {
        newPassword: password,
      }, config)
      if (status === 200) {
        return data
      }
    } catch (error) {
      throw new Error('Error en el servidor ')
    }
  }
}
