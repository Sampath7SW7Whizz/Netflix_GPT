import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
 

  // Check if movies is null or empty before accessing its elements
  if (!movies || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies available</p>
      </div>
    );
  }

  return (
    <div className='px-6'>
     <h1 className='text-3xl py-4 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll'>
      <div className='flex'>
        {/* Access the first movie only if movies[0] exists */}
        {movies.map(movie=><MovieCard key={movie.id} posterPath={movie.poster_path} />)}
        
      </div>
    </div>
    </div>
  );
};

export default MovieList;
