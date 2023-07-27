import { useFormik } from 'formik'
import { myFormSchema } from '../Schemas'

export default function SignIn () {

    const onSubmit = async (values, actions) => {
            await new Promise ((resolve) => setTimeout(resolve, 1000));
            actions.resetForm();
    }

    const {values, errors, touched, isSubmitting, handleBlur, handleChange} = useFormik({
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
                        value={values.email}
                        id='email' 
                        type='email'
                        placeholder='Email'
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        className={errors.email && touched.email ? "input-error" : ""}
                    />
                    {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                    <label htmlFor="password"></label>
                    <input
                        value={values.password}
                        id='password' 
                        type='password'
                        placeholder='password' 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        className={errors.password && touched.password ? "input-error" : ""}
                    />
                    {errors.password && touched.password && <p className='error'>{errors.password}</p>}

                    <button disabled={isSubmitting} type='submit'>Sign In</button>
                    </form>
                    <div className="sideImg">
                    <img src="https://source.unsplash.com/random/800x600" alt="Random image from unsplash" />
                    </div>
                </div>
    )
}