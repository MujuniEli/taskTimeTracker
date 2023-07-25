import { useFormik } from "formik"

export default function SignUp () {

    const {values} = useFormik({
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
                        />
                        <input 
                        value={values.password}
                        id="password"
                        type="password"
                        placeholder="Create password" 
                        />

                        <input
                        value={values.confirmPassword}
                        id="confirmPassword" 
                        type="password" 
                        placeholder="Confirm Password"
                        />

                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
    )
}