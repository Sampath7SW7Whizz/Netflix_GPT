import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


// ... (previous imports)

const Browse = () => {

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
 
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch?(<GPTSearch/>):(<>
      <MainContainer/>
      <SecondaryContainer/>
      </>)}
      {/* You can add rendering logic for the now playing movies here */}
    </div>
  )
}

export default Browse;
