import api from './api.services'

export class RecoveryService {
  static async recovery({ password }) {
    try {
      const { data, status } = await api.put("recover", {
        newPassword: password,
      })
      if (status === 200) {
        return data
      }
    } catch (error) {
      throw new Error('Error en el servidor ')
    }
  }
}
