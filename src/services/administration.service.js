import api from './api.services'

export class AdministrationService {

  static async getUsers() {
    try {
      const { data, status } = await api.get('/users');
      if (status === 200) {
        return data;
      }
    } catch (error) {
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

  static async deleteUser(payload) {
    try {
      const { data, status } = await api.put('/users/delete', payload)
      if (status === 200) {
        return data
      }
    } catch (error) {
      throw new Error('Error al eliminar un usuario')
    }
  }

  static async updateProfile(payload) {
    try {
      const { data, status } = await api.put('/users/profile', payload)
      if (status === 200) {
        return data
      }
    } catch (error) {
      throw new Error('Error al actualizar tus datos')
    }
  }

  static async updatePassword(payload) {
    try {
      const { data, status } = await api.delete('/users/update-password', { data: payload })
      if (status === 200) {
        return data
      }
    } catch (error) {
      throw new Error('Error al modificar tu password')
    }
  }

}