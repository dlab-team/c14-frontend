import * as yup from 'yup';

export const updatePasswordSchema = yup.object().shape({
  password: yup.string().required('Contraseña requerida'),
  newPassword: yup
    .string()
    .required('Contraseña requerida')
    .min(8, 'lenght_min_fail')
    .matches(/[a-z]/, 'minus_missing')
    .matches(/[A-Z]+/, 'mayus_missing')
    .matches(/\d/, 'numbers_missing')
    .matches(/[@$!%*?&]/, 'signs_missing'),
  repeatPassword: yup.string()
    .oneOf([yup.ref('newPassword'), null], 'Contraseñas no coinciden')
    .required('Repetir contraseña es obligatorio')
})

export const validateUpdatePasswordSchema = (data) => {
  try {
    updatePasswordSchema.validateSync(data, { abortEarly: false });
    return []
  } catch (errors) {
    return errors.errors
  }
}