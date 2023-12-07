import * as yup from 'yup';

export const recoverySchema = yup
  .object({
    password: yup.string().required('Contraseña requerida'),
    repeatPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Contraseñas no coinciden')
  });
