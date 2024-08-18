import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user); 
  

  const handleSignOut = () => {
    // Sign out
      signOut(auth).then(() => {
        // Sign-out successful.
         navigate('/');
        
      }).catch((error) => {
        // An error happened.
        navigate('/error'); 


      });

  }
  return (
    <div className='w-screen absolute z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
        <img className='w-44' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='Netflix Logo' />

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