import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addUpcomingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useSelector } from 'react-redux';

const useUpcomingMovies = () => {
const UpcomingMovies = useSelector(state => state.movies.upcomingMovies)
const dispatch = useDispatch()
const getUpcomingMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
  const data = await response.json()
  dispatch(addUpcomingMovies(data.results))
};

useEffect(() => {
  !UpcomingMovies &&
  getUpcomingMovies()
} ,[]) 

}

export default useUpcomingMovies;