import api from './api.services';

export class ResponseService {
  static async createResponse(surveyResponses) {
    try {
      const { data, status } = await api.post('/surveyresponse/', surveyResponses);
      if (status === 201) {
        return data.id;
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

  static async trendResults(polynomialId) {
    try {
      const { data } = await api.get(`/surveyresponse/groupby/${polynomialId}`);
      return data;
    } catch (error) {
      throw new Error('No se pudo obtener la información');
    }
  }

  static async groupedByYear() {
    try {
      const { data } = await api.get(`/surveyresponse/groupedbyyear`);
      const formattedData = data.map(entry => ({
        label: entry.label,
        Visitas: parseInt(entry.Visitas),
        Finalizadas: parseInt(entry.Finalizadas)
      }));
      return formattedData;
    } catch (error) {
      throw new Error('No se pudo obtener la información');
    }
  }

  static async groupedForAYear(year) {
    try {
      const { data } = await api.get(`/surveyresponse/groupedbymonth/${year}`);
      const formattedData = data.map(entry => ({
        label: entry.label,
        Visitas: parseInt(entry.Visitas),
        Finalizadas: parseInt(entry.Finalizadas)
      }));
      return formattedData;
    } catch (error) {
      console.log(error)
      throw new Error('No se pudo obtener la información');
    }
  }

}
