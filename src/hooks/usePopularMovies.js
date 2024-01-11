import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
      const json = await data.json();
      

      // Assuming json.results is an array of movies
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  }

  useEffect(() => {
    getPopularMovies();
  },[]);
};

export default usePopularMovies;