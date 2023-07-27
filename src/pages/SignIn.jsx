import { useFormik } from 'formik'
import { myFormSchema } from '../Schemas'

export default function SignIn () {

    const onSubmit = async (values, actions) => {
            await new Promise ((resolve) => setTimeout(resolve, 1000));
            actions.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        validationSchema: myFormSchema, onSubmit,
    })
    
    return (
                <div className="signIn">
                    <h3>Sign in to access the tracker</h3>
                    <form action="">
                    <label htmlFor="email"></label>
                    <input
                        value={formik.values.email}
                        id='email' 
                        type='email'
                        placeholder='Email' 
                    />
                    <label htmlFor="password"></label>
                    <input
                        value={formik.values.password}
                        id='password' 
                        type='password'
                        placeholder='password' 
                    />

                    <button type='submit'>Sign In</button>
                    </form>
                    <div className="sideImg">
                    <img src="https://source.unsplash.com/random/800x600" alt="Random image from unsplash" />
                    </div>
                </div>
    )
}