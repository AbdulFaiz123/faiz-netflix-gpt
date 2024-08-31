import Header from "./Header"
import { useRef, useState } from 'react'
import { checkValidData } from "../utils/validate"; 
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice';
import { Netflix_BG, USER_AVATAR } from "../utils/constants";



const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState();
    const [errorMesage, setErrorMessage] = useState(null);

    const dispatach = useDispatch();
    

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value );
        setErrorMessage(message);

        if(message)return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: fullName.current.value, photoURL:USER_AVATAR,
              }).then(() => {
                // Profile updated!
                // ...
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatach(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL}));
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
        setIsSignInForm(!isSignInForm);

    };
  return (
    <div>
        <Header />
    <div className="absolute"> 
         <img className="h-screen object-cover" src={Netflix_BG} alt='Netflix bg' />
    </div>
     <form onSubmit={(e)=>e.preventDefault()} className="w-full md:w-3/12 absolute p-8 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80">
    < h1 className="text-white text-2xl md:text-3xl">{isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm  && <input ref={fullName} type='text' placeholder='Full Name' className="p-4 my-4 w-full bg-gray-700"/>}            
            <input ref={email} type='email' placeholder='Email or phone number' className="p-4 my-4 w-full bg-gray-700" />
            <input ref={password} type='password' placeholder='Password' className="p-4 my-4 w-full bg-gray-700"/>
            <p className="text-red-500 font-bold text-sm md:text-lg y-2 ">{errorMesage}</p>
            <button className="bg-red-700 p-4 my-4 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>
            <p className="text-sm text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now.":"Already Registered"}</p>

     </form>
     </div>

  )
}

export default Login