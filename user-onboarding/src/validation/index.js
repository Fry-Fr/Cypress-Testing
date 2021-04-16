import * as yup from 'yup'

export default yup.object().shape({
    name:  yup.string().required("a name is required"),
    email: yup.string().email().required("an email is required"),
    password: yup.string().required("need to fill in password"),
    termsOfService: yup.boolean().oneOf([true], "agree to terms")
})