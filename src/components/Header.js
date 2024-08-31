import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatach = useDispatch();
  const user = useSelector(store => store.user); 
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    // Similiar to addEventListener
   const unsubscribed =  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          
          const {uid,email,displayName,photoURL} = user;
          dispatach(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL,}));
          navigate('/browse');
          // ...
        } else {
          // User is signed out
          // ...
          dispatach(removeUser());
          navigate('/');
        }
      });
      // Clean up subscription
      return () => unsubscribed();
}, [])
  

  const handleSignOut = () => {
    // Sign out
      signOut(auth).then(() => {
        // Sign-out successful.        
      }).catch((error) => {
        // An error happened.
        navigate('/error'); 
      });

  }

  const handleGptSearchClick = () => {  
    // Toggle GptSearch 
    dispatach(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    // Change language
    dispatach(changeLanguage(e.target.value));
    }
  return (
    <div className='w-screen absolute z-10 px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row md:justify-between'>
        <img className='w-44 mx-auto md:mx-0 ' src={LOGO} alt='Netflix Logo' />

      { user && <div  className=' flex p-4 justify-between'>
       {showGptSearch &&
         <select className='p-2 m-2 bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key =  {lang.identifier}  value = {lang.identifier}>{lang.name}</option>
          ))}
          
        </select>}
        <button className='py-2 px-4 mx-4 my-2 rounded-lg bg-purple-800 text-white' onClick={handleGptSearchClick}>
          {showGptSearch? "HomePage":"GPT Search "}
        </button>
        {user && user.photoURL ? (
          <img className='hidden md:block w-12 h-12' src={user.photoURL} alt='userIcon' />
        ) : (
          <div className='w-8 h-8 bg-gray-400 rounded-full'></div> // Placeholder if no photoURL
        )}
          <button className='font-bold text-base text-red-400' onClick={handleSignOut}>SignOut</button>
        </div>}
    </div>
     
  )
}

export default Header