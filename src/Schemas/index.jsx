import * as yup from "yup";

export const myFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("required"),
    password: yup.string().min(5).matches(passwordRules, {"Please create a stronger password"}).required("required")
})