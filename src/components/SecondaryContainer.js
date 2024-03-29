import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div className='bg-black'>
      <div className=' pl-4 md:pl-12 mt-0 md:-mt-52 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"TopRated"} movies={movies.topRatedMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;