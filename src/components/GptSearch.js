import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { Netflix_BG } from "../utils/constants";


const GptSearch = () => {
  return (
   <>
    <div className="fixed -z-10"> 
    <img className=' h-screen object-cover' src={Netflix_BG} alt='Netflix bg' />
</div>
    <div className=''>
        
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
   </>
   
  )
}

export default GptSearch