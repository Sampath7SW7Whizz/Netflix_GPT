import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();

    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies);


  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
      const json = await data.json();
      

      // Assuming json.results is an array of movies
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  }

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
   }, []);
};

export default useNowPlayingMovies;