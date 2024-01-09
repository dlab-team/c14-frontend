import api from './api.services'

export class AdministrationService {

  static async getUsers() {
    try {
      const { data, status } = await api.get('/users');
      if (status === 200) {
        return data;
      }
    } catch (erro) {
      throw new Error('Error al obtener informacion');
    }
  }

  static async create(payload) {
    try {
      const { data } = await api.post('/users', payload);
      return data;
      
    } catch (error) {
      throw new Error('No se pudo crear el administrador');
    }
  }
}