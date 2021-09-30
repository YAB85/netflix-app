import React from "react";
import FriendCard from "./FriendCard";
import classes from "./FriendsList.module.css";

const DUMMY_FRIENDS = [
  {
    id: 1,
    name: "James Martin, Jr.",
    img: "https://www.tvmaze.com/people/1207/ted-babcock",
    gender: "male",
    birthday: "1985-11-12",
    age: "35",
    country: { code: "US", name: "England" }
  },
  {
    id: 2,
    name: "Amber Valleta",
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/4/10010.jpg",
    gender: "female",
    birthday: "1966-11-12",
    age: "76",
    country: { code: "US", name: "England" }
  },
  {
    id: 2,
    name: "Amber Valleta",
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/4/10010.jpg",
    gender: "female",
    birthday: "1966-11-12",
    age: "76",
    country: { code: "US", name: "England" }
  },
];

const FriendsList = () => {
  const elements = DUMMY_FRIENDS.map((item) => {
    console.log(typeof(item.img))
    return (
      <FriendCard
        key={item.id}
        id={item.id}
        img={item.img}
        name={item.name}
        birthday={item.birthday}
        gender={item.gender}
        country={item.country.name}
      />
    );
  });

  return <div className={classes["container-boxes"]}>{elements}</div>;
};

export default FriendsList;
