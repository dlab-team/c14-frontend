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

}