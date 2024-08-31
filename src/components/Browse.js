import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies.js'
import useTopRatedMovies from '../hooks/useTopRatedMovies.js'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


function Browse() {
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch)
 useNowPlayingMovies()
 usePopularMovies()
 useUpcomingMovies()
 useTopRatedMovies()
  
  return  (
    <div>
    <Header/>
    {showGptSearch ? ( <GptSearch/>):
    (<>
    {/* react Fragment */}
      <MainContainer/>
      <SecondaryContainer/> 
    </> )}

   
   
    </div>

  )
}

export default Browse