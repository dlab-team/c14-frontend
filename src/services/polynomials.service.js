import api from './api.services'

export class PolynomialsService {

  static async getPolynomials() {
    try {
      const { data } = await api.get('/polynomials')
      return data
    } catch (error) {
      throw new Error('No se pudo obtener la informacion')
    }
  }

  static async deletePolynomial(id) {
    try {
      const { data } = await api.delete(`/polynomials/${id}`)
      return data
    } catch (error) {
      throw new Error('No se pudo obtener la informacion')
    }
  }

  static async createPolynomial(payload) {
    try {
      const { data } = await api.post('/polynomials/', payload)
      return data
    } catch (error) {
      throw new Error('No se pudo obtener la informacion')
    }
  }

  static async editPolynomial(id, payload) {
    try {
      const { data } = await api.put(`/polynomials/${id}`, payload);
      return data;
    } catch (error) {
      throw new Error('No se pudo editar el polinomio');
    }
  }

  static async getPolynomialById(id) {
    try {
      const { data } = await api.get(`/polynomials/${id}`)
      return data
    } catch (error) {
      throw new Error('No se pudo obtener la informacion')
    }
  }

  static async getSocialsPolynomial() {
    try {
      const { data } = await api.get('/polynomials/notpolitical')
      return data
    } catch (error) {
      throw new Error('No se pudo obtener la informacion')
    }
  }
}