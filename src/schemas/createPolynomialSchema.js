import * as yup from 'yup'

export const createPolynomialSchema = yup
  .object({
    name: yup.string().required('Nombre ingresar un nombre'),
    political: yup.boolean().required('Debes seleccionar un tipo'),
    active: yup.boolean().required('Debes seleccionar un estado'),
  })
  .required()
