import api from './api.services';

export class PhrasesService {
  static async getExtrmPoliticalPhrases(group) {
    try {
      const { data } = await api.get(`/phrases/political/${group}`);
      return data;
    } catch (error) {
      throw new Error('No se pudo obtener la informacion');
    }
  }

  static async getPoliticalPhrases(valor) {
    try {
      const { data, status } = await api.get('/phrases/bygroup/political', { data: valor });
      if (status === 200) {
        return data;
      }
    } catch (erro) {
      throw new Error('Error al obtener informacion');
    }
  }
}
