import React from "react";
import classes from './UserCard.module.css';


const UserCard = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <div className={classes["card__overlay"]}>
          <img className={classes["movie-img"]} src={props.img} alt="logo">
            
          </img>
        </div>
        <div className={classes["card__content"]}>
          <span className={classes["card__title"]}>{props.name}</span>
          <span className={classes["card__title"]}>{props.rating}</span>
          
          <span className={classes["card__description"]}>{props.genre}</span>
          <button className={classes["card__btn"]}>Delete card</button>
        </div>
        <span className={classes["card__number"]}>{props.id}</span>
      </div>
    </div>
  );
};

export default UserCard;
