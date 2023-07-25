import { useFormik } from "formik"

export default function SignUp () {
    
    return (
                <div className="signUp">
                    <h3>This is the sign up panel</h3>

                    <form action="">
                        <input
                        id="email" 
                        type="email" 
                        placeholder="email"
                        />
                        <input 
                        id="password"
                        type="password"
                        placeholder="Create password" 
                        />

                        <input
                        id="confirmPassword" 
                        type="password" 
                        placeholder="Confirm Password"
                        />
                    </form>
                </div>
    )
}