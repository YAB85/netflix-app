import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faPlusSquare,
  faSave,
  faShareAlt,
  faBookmark
} from "@fortawesome/free-solid-svg-icons";

import classes from "./MovieCart.module.css";

const MovieCart = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
    const movieListData = {
      id: props.id,
      img: props.img,
      name: props.name,
      rating: props.rating,
      runtime: props.runtime,
      genre: props.genre,
      summary: props.summary,
      language: props.language
    };
    props.onAddMovie(movieListData);
  };

  return (
    <div>
      <div className={classes.wrapper}>
        <form
          id={props.id}
          onSubmit={submitFormHandler}
          className={classes.movie}
        >
          <div className={classes.menu}>
            <i className={classes["material-icons"]}>
              <FontAwesomeIcon icon={faFilter} />
            </i>
          </div>
          <div className={classes["container-image"]}>
            <img
              className={classes["movie-img"]}
              src={props.img}
              alt="logo"
            ></img>
          </div>

          <div className={classes["text-movie-cont"]}>
            <div className={classes["mr-grid"]}>
              <div className={classes.col1}>
                <h1>{props.name}</h1>
                <ul className={classes["movie-gen"]}>
                  <li>{props.rating}/</li>
                  <li>{`${props.runtime}h`} /</li>
                  <li>{`${props.genre.join(` `)}`}</li>
                </ul>
              </div>
            </div>
            <div className={`${classes["mr-grid"]} ${classes["summary-row"]}`}>
              <div className={classes.col2}>
                <h5>SUMMARY</h5>
              </div>
            </div>
            <div className={classes["mr-grid"]}>
              <div
                className={`${classes.col1} ${classes["movie-description"]}`}
                dangerouslySetInnerHTML={{ __html: props.summary }}
              />
            </div>
            <div className={`${classes["mr-grid"]} ${classes["action-row"]}`}>
              <div className={classes.col1}>
                <p className={classes["movie-actors"]}>{props.language}</p>
              </div>
            </div>
            <div className={`${classes["mr-grid"]} ${classes["action-row"]}`}>
              <div className={classes.col2}>
                <button className="btn">
                  <FontAwesomeIcon icon={faPlusSquare} /> Add to List
                </button>
              </div>
              <div className={`${classes.col6} ${classes["action-btn"]}`}>
                <FontAwesomeIcon icon={faSave} />
              </div>
              <div className={`${classes.col6} ${classes["action-btn"]}`}>
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <div className={`${classes.col6} ${classes["action-btn"]}`}>
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieCart;
