import * as yup from 'yup';

export const opinionSchema = yup
  .object({
    phrase: yup.array().of(yup.string().required('Campo requerido')),
  })
  .required();
