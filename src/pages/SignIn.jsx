import { useFormik } from 'formik'

export default function SignIn () {
    const formik = useFormik({
        initialValues: {
            email:"",
            password:""
        },
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
                    {/* <div className="sideImg">
                    <img src="https://source.unsplash.com/random/800x600" alt="Random image from unsplash" />
                    </div> */}
                </div>
    )
}