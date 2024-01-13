import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies=()=>{
    const dispatch = useDispatch();

    const upcomingMovies=useSelector(store=>store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
      const json = await data.json();
      

      // Assuming json.results is an array of movies
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  }

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  },[]);
};

export default useUpcomingMovies;