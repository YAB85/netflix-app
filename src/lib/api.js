const FIREBASE_DOMAIN =
 "https://netflix-app-59e92-default-rtdb.europe-west1.firebasedatabase.app";
  

export async function getAllMovies() {
  const response = await fetch(`${FIREBASE_DOMAIN}/movies.json`);
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
  }

  return transformedMovies;
}


export async function getAllFriends() {
  const response = await fetch(`${FIREBASE_DOMAIN}/friends.json`);
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



export async function addMovie(moviesData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/movies.json`, {
    method: "POST",
    body: JSON.stringify(moviesData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create movies.");
  }

  return null;
}



export async function addFriend(friendsData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/friends.json`, {
    method: "POST",
    body: JSON.stringify(friendsData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add friend.");
  }

  return null;
}

