import * as yup from 'yup';

export const loginSchema = yup
    .object({
        email: yup.string().required('Email es requerido'),
        password: yup.string().required('Contraseña es requerida'),
    })
    .required();