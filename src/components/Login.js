import Header from "./Header"
import { useRef, useState } from 'react'
import { checkValidData } from "../utils/validate"; 
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice';



const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState();
    const [errorMesage, setErrorMessage] = useState(null);
    const navigate= useNavigate(); 
    const dispatach = useDispatch();
    

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value );
        console.log('message',message);
        setErrorMessage(message);

        if(message)return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: fullName.current.value, photoURL: "https://avatars.githubusercontent.com/u/53165415?v=4",
              }).then(() => {
                // Profile updated!
                // ...
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatach(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL,}));
                navigate('/browse');
              }).catch((error) => {
                // An error occurred
                // ...
                setErrorMessage(error.message);
              });
              

            

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode +"-"+ errorMessage);
            // ..
        });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/browse');

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-"+ errorMessage);
            });

        }
        
    };
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