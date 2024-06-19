//C:\Users\morellyo\react_project\ex\client\src\redux\rootReducer.js
import { v4 as uuidv4 } from "uuid";

const initialState = {
  movies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        movies: [...state.movies, { ...action.payload }],
      };
    }

    case "REMOVE": {
      const movies = state.movies.filter(
        (move) => move.serialNo !== action.payload
      );
      return { ...state, movies };
    }

    default:
      return state;
  }
};

export default moviesReducer;
