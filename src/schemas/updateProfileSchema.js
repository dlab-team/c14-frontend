import * as yup from 'yup';

export const updateProfileSchema = yup
  .object({
    firstName: yup.string().required('Nombre es requerido'),
    lastName: yup.string().required('Contraseña es requerida'),
    email: yup.string().required('Email es requerido'),
  })
  .required();