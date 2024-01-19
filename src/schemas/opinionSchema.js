import * as yup from 'yup';

export const opinionSchema = yup
  .object({
    phrases: yup.array().of(yup.string().required('Campo requerido')),
  })
  .required();
