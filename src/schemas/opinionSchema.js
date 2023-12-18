import * as yup from 'yup';

export const opinionSchema = yup
  .object({
    frase1: yup.string().required('Campo requerido'),
    frase2: yup.string().required('Campo requerido'),
    frase3: yup.string().required('Campo requerido'),
    frase4: yup.string().required('Campo requerido'),
    frase5: yup.string().required('Campo requerido'),
    frase6: yup.string().required('Campo requerido'),
    frase7: yup.string().required('Campo requerido'),
    frase8: yup.string().required('Campo requerido'),
    frase9: yup.string().required('Campo requerido'),
  })
  .required();
