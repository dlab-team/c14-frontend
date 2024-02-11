import * as yup from 'yup'

export const createPhraseSchema = yup
  .object({
    text: yup.string().required('Ingresar una frase'),
    group: yup.string().required('Ingresa una grupo'),
    polynomialId: yup.string().required('Debes seleccionar un polinomio'),
  })
  .required()
