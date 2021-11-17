import * as yup from 'yup';

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    login: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null]).required(),
});
