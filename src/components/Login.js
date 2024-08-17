import Header from "./Header"
import { useRef, useState } from 'react'
import { checkValidData } from "../utils/validate"; 


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState();
    const [errorMesage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value ,fullName.current.value);
        console.log(message);
        setErrorMessage(message);
       
    }
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
     <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-8 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80">
    < h1 className="text-white text-3xl">{isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm  && <input ref={fullName} type='text' placeholder='Full Name' className="p-4 my-4 w-full bg-gray-700"/>}            
            <input ref={email} type='email' placeholder='Email or phone number' className="p-4 my-4 w-full bg-gray-700" />
            <input ref={password} type='password' placeholder='Password' className="p-4 my-4 w-full bg-gray-700"/>
            <p className="text-red-500 font-bold text-lg y-2 ">{errorMesage}</p>
            <button className="bg-red-700 p-4 my-4 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>
            <p className="text-sm text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now.":"Already Registered"}</p>

     </form>
     </div>

  )
}

export default Login