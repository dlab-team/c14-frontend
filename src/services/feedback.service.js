import api from './api.services';

export class FeedbackService {
    static async createFeedback(data) {
        try {
            const { data: response, status } = await api.post('/feedback', data);
            if (status === 200) {
                return response;
            }
        } catch (error) {
            console.log(error)
            throw new Error('Error al enviar la encuesta');
        }
    }

    static async getAllFeedback() {
        try {
          const { data } = await api.get(`/feedback`);
          return data;
        } catch (error) {
          throw new Error('No se pudo obtener la informacion');
        }
      }

}