import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDbResponse } from '../interfaces/movie.interface';

interface MoviesState {
  nowPlaying:Movie[];
  popular:Movie[];
  topRated:Movie[];
  upcoming:Movie[];
}

export const useMovies = () => {

  const [isLoading, setLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>();
  

  const getMovies = async() => {
    const nowPlayingPromise = movieDB.get<MovieDbResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDbResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDbResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDbResponse>('/upcoming');

    const response =  await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise])

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results
    })

    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return {
    isLoading,
    ...moviesState
  };
};
