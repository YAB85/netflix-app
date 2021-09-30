import React, { useEffect } from "react";

import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getAllMovies } from "../../lib/api";
import NoMoviesFound from "../Movies/NoMoviesFound";
import MoviesList from "../Movies/MoviesList";



const AllMovies = () => {
  const {
    sendRequest,
    status,
    data: loadedMovies,
    error
  } = useHttp(getAllMovies, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedMovies || loadedMovies.length === 0)) {
    return <NoMoviesFound />;
  }

  return <MoviesList movies={loadedMovies} />;
};

export default AllMovies;
