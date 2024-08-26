
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailerVideos } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const  useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos', API_OPTIONS)
        const response = await data.json()
    
        const filterData = response.results.filter((video) => video.type === 'Trailer');
        const trailer = filterData.length ? filterData[0]: response.results[0];     
        dispatch(addTrailerVideos(trailer))
    
    };
    
    useEffect(() => {   
        getMovieVideo()                   
    }
    ,[])
}

export default useMovieTrailer;