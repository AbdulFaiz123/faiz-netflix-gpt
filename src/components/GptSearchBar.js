import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import lang  from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResults } from '../utils/gptSlice';




const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatach = useDispatch();

    // search Movie in TMDB API

    const searchMovieTMDB = async (movie) => {
        const response =  await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&page=1', API_OPTIONS)

        const data = await response.json();
        return data.results;
    }

    const handleGPTSearchClick = async() => {
        // Handle GPT search
        const searchValue = searchText.current.value;
        const gptQuery = " Act as a  Movie recommendation system and suggest me some movies based on the following query : " + searchValue + "only give me 5 movies,comma separated like the example results  : Gadar , Sholay , Don , Golmaal Returns , Koi Mil Gaya";
        console.log(searchText.current.value);
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }], 
            // model: 'gpt-4o-2024-05-13',
            model: 'gpt-3.5-turbo',

    })
    if(!gptResults.choices){ 
        // Error handling

        console.log('No results found');
        return;
    }
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMoviesResults = gptResults.choices?.[0]?.message?.content.split(',');
    console.log('GptMoviesResults',gptMoviesResults);
    //  Get the movies results in list format
    // For Each Movie I will search TMDB API and get the movie details
    const movieDetails = gptMoviesResults.map( (movie) =>  searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(movieDetails);
        
    dispatach(addGptMovieResults({movieNames:gptMoviesResults ,movieResults:tmdbResults}));

    }


  return (
    <div  className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
        <input ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='py-2 px-4  m-4 col-span-3 bg-red-700 text-white rounded-lg' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar