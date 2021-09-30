import React, { Fragment, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import MovieCart from "./MovieCart";
import classes from "./MoviesList.module.css";
import { addMovie } from "../../lib/api";




const DUMMY_MOVIES = [
  {
    id: 1,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    name: "Under the Dome",
    raiting: { average: 6.5 },
    runtime: 60,
    genre: ["Drama", "Science-Fiction", "Thriller"],
    summary:
      "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    language: "English"
  },
  {
    id: 2,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
    name: "Person of Interest",
    raiting: { average: 8.9 },
    runtime: 60,
    genre: ["Action", "Science-Fiction", "Crime"],
    summary:
      "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered irrelevant. They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
    language: "English"
  },
  {
    id: 3,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
    name: "Person of Interest",
    raiting: { average: 8.9 },
    runtime: 60,
    genre: ["Action", "Science-Fiction", "Crime"],
    summary:
      "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered irrelevant. They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
    language: "English"
  },
  {
    id: 4,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
    name: "Person of Interest",
    raiting: { average: 8.9 },
    runtime: 60,
    genre: ["Action", "Science-Fiction", "Crime"],
    summary:
      "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered irrelevant. They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
    language: "English"
  }
];

const MoviesList = () => {
  const { sendRequest, status } = useHttp(addMovie);
 

  useEffect(() => {
    if (status === "completed") {
      console.log(status);
    }
  }, [status]);

  const elements = DUMMY_MOVIES.map((item) => {
    const onAddMovieHandler = (movieList) => {
      sendRequest(movieList);
    };
    return (
      <MovieCart
        id={item.id}
        key={item.id}
        img={item.img}
        name={item.name}
        rating={item.raiting.average}
        runtime={item.runtime}
        genre={item.genre}
        summary={item.summary}
        language={item.language}
        onAddMovie={onAddMovieHandler}
      />
    );
  });

  return (
    <Fragment>
      <div className={classes["container-boxes"]}>{elements}</div>
    </Fragment>
  );
};

export default MoviesList;
