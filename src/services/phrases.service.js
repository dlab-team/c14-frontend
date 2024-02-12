import api from './api.services';

export class PhrasesService {
  static async getExtrmPoliticalPhrases(optionId) {
    try {
      const { data, status } = await api.post(`/phrases/inverse/political`, {
        id: optionId,
      });
      if (status === 200) {
        return data;
      }
    } catch (error) {
      throw new Error('Error al obtener informacion');
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
    } catch (error) {
      throw new Error('Error al obtener informacion');
    }
  }

  static async getPhrasesByIdPolinomial(idPolinomial) {
    try {
      const { data } = await api.get(`/phrases/polynomial/${idPolinomial}`);
      return data;
    } catch (error) {
      throw new Error('Error al obtener informacion');
    }
  }

  static async getSocialPhrases(optionIds) {
    const ids = Object.values(optionIds);
    try {
      const { data, status } = await api.post(`/phrases/bygroup/social`, {
        ids: ids,
      });
      if (status === 200) {
        return data.phrases;
      }
    } catch (error) {
      throw new Error('Error al obtener informacion');
    }
  }

  static async getInverseSocialPhrases(optionIds) {
    const ids = Object.values(optionIds);
    try {
      const { data, status } = await api.post(`/phrases/inverse/social`, {
        ids: ids,
      });
      if (status === 200) {
        return data.phrases;
      }
    } catch (error) {
      throw new Error('Error al obtener informacion');
    }
  }

  static async deletePhrase(id) {
    try {
      const { data } = await api.delete(`/phrases/${id}`);
      return data;
    } catch (error) {
      throw new Error('No se pudo obtener la informacion');
    }
  }

  static async createPhrase(payload) {
    try {
      const { data } = await api.post('/phrases', payload);
      return data;
    } catch (error) {
      throw new Error('No se pudo crear la frase');
    }
  }

  static async updatePhrase(phraseId, payload) {
    try {
      const { data } = await api.put(`/phrases/${phraseId}`, payload);
      return data;
    } catch (error) {
      throw new Error('No se pudo actualizar la frase');
    }
  }
}
