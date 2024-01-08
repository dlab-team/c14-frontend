import api from './api.services'

export class PhrasesService {

  static async getExtrmPoliticalPhrases(group) {
    try {
      const { data } = await api.get(`/phrases/political/${group}`)
      return data
    } catch (error) {
      throw new Error('No se pudo obtener la informacion')
    }
  }
}