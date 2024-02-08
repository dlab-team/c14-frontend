import api from './api.services'

export class MetricsService {

  static async getMetrics() {
    try {
      const { data, status } = await api.get('/surveyresponse/metrics');
      if (status === 200) {
        return data;
      }
    } catch (error) {
      throw new Error('Error al obtener informacion');
    }
  }

}