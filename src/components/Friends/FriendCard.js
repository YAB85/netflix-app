import React from "react";
import classes from "./FriendCard.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faSave,
  faShareAlt,
  faBookmark,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";

const FriendCard = (props) => {
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.friend}>
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

          <div className={classes["text-friend-cont"]}>
            <div className={classes["mr-grid"]}>
              <div className={classes.col1}>
                <h1>{props.name}</h1>
                <ul className={classes["friend-gen"]}>
                  <li>{props.birthday}</li>
                  <li>{`${props.country}`}</li>
                  <li>{`${props.gender}`}</li>
                </ul>
              </div>
            </div>
            <div className={`${classes["mr-grid"]}`}>
              <div className={classes.col2}>
                <h5>{props.age}</h5>
              </div>
            </div>
            <div className={`${classes["mr-grid"]} ${classes["action-row"]}`}>
              <div className={classes.col2}>
                <div className={classes["watch-btn"]}>
                  <h3>
                    <FontAwesomeIcon icon={faPlusSquare} /> Add to friends
                  </h3>
                </div>
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
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
