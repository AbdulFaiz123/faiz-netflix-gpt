import Header from "./Header"
import { useState } from 'react'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState();
    const toggleSignInForm = () => {
        console.log('Sign up now')
        setIsSignInForm(!isSignInForm);

    };
  return (
    <div>
        <Header />
    <div className="absolute"> 
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/90f00445-6bf9-4c3d-a153-66f3e17902bd/DE-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7ec88160-f36a-4a31-9c05-498eda41620d_medium.jpg" alt='Netflix bg' />
    </div>
     <form className="w-3/12 absolute p-8 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80">
    < h1 className="text-white text-3xl">{isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm  && <input type='text' placeholder='Full Name' className="p-4 my-4 w-full bg-gray-700"/>}            <input type='password' placeholder='Password' className="p-4 my-4 w-full bg-gray-700"/>
            <input type='email' placeholder='Email or phone number' className="p-4 my-4 w-full bg-gray-700" />
            <button className="bg-red-700 p-4 my-4 w-full rounded-lg">{isSignInForm ? "Sign In":"Sign Up"}</button>
            <p className="text-sm text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now.":"Already Registered"}</p>
     </form>
     </div>

  )
}

export default Login