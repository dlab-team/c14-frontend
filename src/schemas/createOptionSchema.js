import * as yup from 'yup'

export const createOptionSchema = yup
  .object({
    name: yup.string().required("Debes ingresar un nombre"),
    group: yup
      .string()
      .transform(originalValue => {
        const modifiedValue = originalValue.replace(/\s/g, '').replace(/[^a-zA-Z0-9]/g, '');
        return modifiedValue.charAt(0).toUpperCase() + modifiedValue.slice(1);
      })
      .required("Debes ingresar un grupo"),
  })
  .required();