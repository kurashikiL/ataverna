import * as yup from 'yup';

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    nick: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(12).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null]).required(),
});

