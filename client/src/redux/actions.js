//C:\Users\morellyo\react_project\ex\client\src\redux\actions.js  ============================

const doRemoveMovie = (serialNo) => {
  return { type: "REMOVE", payload: serialNo };
};

const doAddMovie = (movie) => {
  return { type: "ADD", payload: movie };
};

const doSetMovies = (movies) => {
  return { type: "SET_MOVIES", payload: movies };
};

export { doRemoveMovie, doAddMovie, doSetMovies };
