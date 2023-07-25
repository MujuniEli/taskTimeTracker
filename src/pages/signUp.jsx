import { useFormik } from "formik"

export default function SignUp () {

    const {values, handleBlur, handleChange} = useFormik({
            initialValues: {
                email: "",
                password: "",
                confirmPassword: ""
            },
    })
    
    return (
                <div className="signUp">
                    <h3>This is the sign up panel</h3>

                    <form action="">
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