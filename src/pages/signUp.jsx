import { useFormik } from "formik"
import { myFormSchema } from "../Schemas"

export default function SignUp () {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
            initialValues: {
                email: "",
                password: "",
                confirmPassword: ""
            },
            validationSchema: myFormSchema, onSubmit,
    });
    
    return (
                <div className="signUp">
                    <h3>This is the sign up panel</h3>

                    <form onSubmit={handleSubmit} autoComplete="off">
                        <input
                        value={values.email}
                        id="email" 
                        type="email" 
                        placeholder="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        <input 
                        value={values.password}
                        id="password"
                        type="password"
                        placeholder="Create password" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />

                        <input
                        value={values.confirmPassword}
                        id="confirmPassword" 
                        type="password" 
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />

                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
    )
}