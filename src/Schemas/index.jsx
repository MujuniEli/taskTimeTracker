import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const myFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("required"),
    password: yup.string().min(5).matches(passwordRules, {message: "Please create a stronger password" }).required("required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("required"),
});