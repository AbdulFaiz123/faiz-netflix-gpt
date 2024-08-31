import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title ,movies}) => {
    
    if (!movies || movies.length === 0) {
        return <div>No movies available.</div>; // Or a loading spinner, or an error message
      }
    
    return (
    <div className='px-6'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>
            {movies.map((movie) =>(<MovieCard key={movie.id} posterPath={movie.poster_path}/> ))}
            
        </div>
        </div>

    </div> 
  )
}

export default MovieList