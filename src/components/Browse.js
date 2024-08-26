import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies.js'
import useTopRatedMovies from '../hooks/useTopRatedMovies.js'


function Browse() {
 useNowPlayingMovies()
 usePopularMovies()
 useUpcomingMovies()
 useTopRatedMovies()
  
  return  (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/> 
    </div>

  )
}

export default Browse