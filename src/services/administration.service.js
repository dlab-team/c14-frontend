import api from './api.services'

export class AdministrationService {

  static async getUsers() {
    try {
      const { data, status } = await api.get('/users')
      if (status === 200) {
        return data
      }
    } catch (erro) {
      throw new Error('Error al obtener informacion')
    }
  }

  static async deleteUser(payload) {
    try {
      const { data, status } = await api.delete('/users/delete', { data: payload })
      if (status === 200) {
        return data
      }
    } catch (erro) {
      throw new Error('Error al eliminar un usuario')
    }
  }
}