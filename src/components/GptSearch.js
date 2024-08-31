import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { Netflix_BG } from "../utils/constants";


const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10"> 
         <img src={Netflix_BG} alt='Netflix bg' />
    </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch