const FIREBASE_DOMAIN = "http://api.tvmaze.com";

export async  function getMovies() {
  let movieList = [];
  let movie = {};
  await fetch("http://api.tvmaze.com/shows")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map(
        (item) => {
          (movie = {
            id: item.id,
            key: item.id,
            img: item.url,
            name: item.name,
            rating: item.rating,
            runtime: item.runtime,
            genre: item.genres,
            summary: item.summary,
            language: item.language
          })
           return movieList.push(movie);
        }
      );
    });
  

  /* const response = await fetch(`${FIREBASE_DOMAIN}/shows`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch movies.");
  }

  const transformedMovies = [];

  for (const key in data) {
    const movieObj = {
      id: key,
      ...data[key]
    };

    transformedMovies.push(movieObj);
  } */
  //console.log(transformedMovies);
  //return transformedMovies;

  return movieList;
}

export async function getFriends() {
  const response = await fetch(`${FIREBASE_DOMAIN}/people`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch friends.");
  }

  const transformedFriends = [];

  for (const key in data) {
    const friendObj = {
      id: key,
      ...data[key]
    };

    transformedFriends.push(friendObj);
  }

  return transformedFriends;
}

getMovies();
