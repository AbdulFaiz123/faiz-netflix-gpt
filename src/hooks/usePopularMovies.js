import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useSelector } from 'react-redux';


const usePopularMovies = () => {
const PopularMovies = useSelector(state => state.movies.popularMovies)

const dispatch = useDispatch()
const getPopularMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
  const data = await response.json()
  dispatch(addPopularMovies(data.results))
};

useEffect(() => {
  !PopularMovies &&
  getPopularMovies()
} ,[]) 

}

export default usePopularMovies;