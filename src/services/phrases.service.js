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

  static async getPoliticalPhrases(optionId) {
    try {
      const { data, status } = await api.post(`/phrases/bygroup/political`, {
        id: optionId,
      });
      if (status === 200) {
        return data;
      }
    } catch (erro) {
      throw new Error('Error al obtener informacion');
    }
  }

  static async getPhrasesByIdPolinomial(idPolinomial) {
    try {
      const {data} = await api.get(`/phrases/polynomial/${idPolinomial}`);
      return data;
    
    } catch (error) {
      throw new Error('Error al obtener informacion');
    }
  }
}
