import React, { useEffect } from "react";

import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getAllMovies } from "../../lib/api";
import NoMoviesFound from "../Movies/NoMoviesFound";
import UserCard from "./UserCard";

import classes from './UserList.module.css'


const UserList = () => {
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
  console.log(loadedMovies)
  

  return (
    <div className={classes["container-boxes"]}>
      {loadedMovies.map((movie) => (
        <UserCard
          id={movie.id}
          key={movie.id}
          img={movie.img}
          name={movie.name}
          rating={movie.rating}
          genre={movie.genre.join(` `)}
                    
        />
      ))}
    </div>
  );
};

export default UserList;
