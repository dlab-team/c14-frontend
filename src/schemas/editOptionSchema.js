import * as yup from 'yup'

export const editOptionSchema = yup
  .object({
    name: yup.string().required("Debes ingresar un nombre"),
    group: yup
      .string()
      .required("Debes ingresar un grupo"),
  })
  .required();