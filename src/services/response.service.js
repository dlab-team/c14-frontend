import api from './api.services';

export class ResponseService {

  static async createResponse(surveyResponses) {
    try {

      const { data, status } = await api.post('/surveyresponse/', surveyResponses)
      if (status === 201) {
        return data.id
      }
    } catch (error) {
      throw new Error('Error al obtener informacion');
    }
  }

  static async finishResponse(payload) {
    try {
      const { data } = await api.put('/surveyresponse/', payload);
      return data;
    } catch (error) {
      throw new Error('No se pudo finalizar la encuesta');
    }
  }

  static async politicalTrendResults(polynomialId) {
    try {
      const { data } = await api.post(`/surveyresponse/groupby/${polynomialId}`);
      return data;
    } catch (error) {
      throw new Error('No se pudo obtener la información');
    }
  }

}