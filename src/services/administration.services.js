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
}