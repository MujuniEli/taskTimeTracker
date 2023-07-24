import { useFormik } from 'formik'

export default function SignIn () {
    const formik = useFormik({
        initialValues: {
            email:"",
        },
    })
    
    return (
                <div className="admin">
                    <h3>This is the sign in panel</h3>
                    <label htmlFor="email"></label>
                    <input
                        value={formik.values.email}
                        id='email' 
                        type='email'
                        placeholder='Email' 
                    />
                </div>
    )
}