import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatach = useDispatch();
  const user = useSelector(store => store.user); 

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
  return (
    <div className='w-screen absolute z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
        <img className='w-44' src={LOGO} alt='Netflix Logo' />

      { user && <div  className=' flex p-4'>
        {user && user.photoURL ? (
          <img className='w-8 h-8' src={user.photoURL} alt='userIcon' />
        ) : (
          <div className='w-8 h-8 bg-gray-400 rounded-full'></div> // Placeholder if no photoURL
        )}
          <button className='font-bold text-red-600' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
     
  )
}

export default Header