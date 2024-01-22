import api from './api.services';

export class OptPolynomialsService {
  static async getOptPolynomials() {
    try {
      const { data, status } = await api.get('/polynomialsoptions');
      if (status === 200) {
        return data;
      }
    } catch (erro) {
      throw new Error('Error al obtener informacion');
    }
  }

  static async getOptPoliticalPolynomial() {
    try {
      const { data, status } = await api.get('/polynomialsoptions/political');
      if (status === 200) {
        return data;
      }
    } catch (erro) {
      throw new Error('Error al obtener informacion');
    }
  }

  static async getOptPolynomialById(id) {
    try {
      const { data } = await api.get(`/polynomialsoptions/${id}`);
      return data;
    } catch (error) {
      throw new Error('No se pudo obtener la informacion');
    }
  }

  static async createOptPolynomial(payload) {
    try {
      const { data } = await api.post('/polynomialsoptions', payload);
      return data;
    } catch (error) {
      throw new Error('No se pudo crear la opción');
    }
  }

  static async editOptPolynomial(id, payload) {
    try {
      const { data } = await api.put(`/polynomialsoptions/${id}`, payload);
      return data;
    } catch (error) {
      throw new Error('No se pudo editar la opción');
    }
  }

  static async deleteOptPolynomial(id) {
    try {
      const { data, status } = await api.delete(`/polynomialsoptions/${id}`);
      if (status === 200) {
        return data;
      }
    } catch (error) {
      throw new Error('error al eliminar la opción');
    }
  }
}
