import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies=()=>{
    const dispatch = useDispatch();

    const topRatedMovies=useSelector(store=>store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
      const json = await data.json();
      

      // Assuming json.results is an array of movies
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  }

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  },[]);
};

export default useTopRatedMovies;