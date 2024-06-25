//C:\Users\morellyo\react_project\ex\client\src\redux\rootReducer.js =================================

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
        (movie) => movie.serialNo !== action.payload
      );
      return { ...state, movies };
    }

    case "SET_MOVIES": {
      return { ...state, movies: action.payload };
    }

    default:
      return state;
  }
};

export default moviesReducer;
