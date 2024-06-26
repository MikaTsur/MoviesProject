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
        (movie) => movie._id !== action.payload
      );
      return { ...state, movies };
    }

    case "SET_MOVIES": {
      return { ...state, movies: action.payload };
    }

    case "UPDATE": {
      const movies = state.movies.map((movie) =>
        movie._id === action.payload.id
          ? { ...movie, ...action.payload.updatedMovie }
          : movie
      );
      return { ...state, movies };
    }

    default:
      return state;
  }
};

export default moviesReducer;
