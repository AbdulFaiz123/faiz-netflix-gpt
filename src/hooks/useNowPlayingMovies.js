import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useSelector } from 'react-redux';


const useNowPlayingMovies = () => {
  const NowPlayingMovies = useSelector(state => state.movies.nowPlayingMovies)


const dispatch = useDispatch()
const getNowPlayingMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
  const data = await response.json()
  dispatch(addNowPlayingMovies(data.results))
};

useEffect(() => {
  !NowPlayingMovies && getNowPlayingMovies()
} ,[]) 

}

export default useNowPlayingMovies;