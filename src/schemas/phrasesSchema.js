import * as yup from 'yup';

export const phrasesSchema = yup
  .object({
    phrase: yup.string().required('Campo requerido'),
    binomio: yup.string().required('Campo requerido'),
    porcentaje: yup.string().required('Ingresa %'),
  })
  .required();
