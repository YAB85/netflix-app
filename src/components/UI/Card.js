import React from 'react'
import classes from './Card.module.css';


const Card = (props) => {
  return (
    <div className={classes.card}>{ props.childer }</div>
  )
}

export default Card
