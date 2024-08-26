import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useTopRatedMovies = () => {
const dispatch = useDispatch()
const getTrendingMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
  const data = await response.json()
  dispatch(addTopRatedMovies(data.results))
};

useEffect(() => {
  getTrendingMovies()
} ,[]) 

}

export default useTopRatedMovies;