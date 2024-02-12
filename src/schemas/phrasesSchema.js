import * as yup from 'yup';

export const phrasesSchema = yup
  .object({
    text: yup.string().required('Campo requerido'),
    survey_results: yup.array().of(
      yup.object({
        percentage: yup.number().required('Ingresa %'),
      })
    ),
  })
  .required();
