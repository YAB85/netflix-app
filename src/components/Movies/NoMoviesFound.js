import { Link } from "react-router-dom";

import classes from "./NoMoviesFound.module.css";

const NoMoviesFound = () => {
  return (
    <div className={classes.nomovies}>
      <p>No movies found!</p>
      <Link to="/movies" className="btn">
        Add a Movie
      </Link>
    </div>
  );
};

export default NoMoviesFound;
