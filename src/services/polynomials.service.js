import api from './api.services'

export class PolynomialsService {

  static async getPolynomialById(id) {
    try {
      const { data } = await api.get(`/polynomials/${id}`)
      return data
    } catch (error) {
      throw new Error('No se pudo obtener la informacion')
    }
  }
}