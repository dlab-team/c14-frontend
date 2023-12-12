import * as yup from 'yup';

export const opinionSchema = yup
  .object({
    frase1: yup.string().required('Campo requerido'),
    frase2: yup.string().required('Campo requerido'),
    frase3: yup.string().required('Campo requerido'),
    frase4: yup.string().required('Campo requerido'),
    frase5: yup.string().required('Campo requerido'),
  })
  .required();
