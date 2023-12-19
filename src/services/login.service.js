import api from './api.services'

export class LoginService {
  static async login({ email, password }) {
    try {
      const { data } = await api.post('/users/login', { email, password })
      return data
    } catch (error) {
      throw new Error('Email o contraseña incorrectos.')
    }
  }
}
