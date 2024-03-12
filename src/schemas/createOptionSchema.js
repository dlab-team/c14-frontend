import * as yup from 'yup'

export const createOptionSchema = yup
  .object({
    name: yup.string().required("Debes ingresar un nombre"),
    group: yup
      .string()
      .required("Debes ingresar un grupo"),
    description: yup.string().required("Debes ingresar una descripción"),
    color: yup.string().required("ingresa un color"),
  })
  .required();