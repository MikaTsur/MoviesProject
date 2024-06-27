// // C:\Users\morellyo\react_project\ex\client\src\redux\rootReducer.js

// import { combineReducers } from "redux";

// // Movie reducer
// const movieReducer = (state = { movies: [] }, action) => {
//   switch (action.type) {
//     case "ADD":
//       return { ...state, movies: [...state.movies, action.payload] };
//     case "REMOVE":
//       return {
//         ...state,
//         movies: state.movies.filter((movie) => movie._id !== action.payload),
//       };
//     case "SET_MOVIES":
//       return { ...state, movies: action.payload };
//     case "UPDATE":
//       return {
//         ...state,
//         movies: state.movies.map((movie) =>
//           movie._id === action.payload.id
//             ? { ...movie, ...action.payload.updatedMovie }
//             : movie
//         ),
//       };
//     default:
//       return state;
//   }
// };

// // Subscription reducer
// const subscriptionReducer = (state = { subscriptions: [] }, action) => {
//   switch (action.type) {
//     case "ADD_SUBSCRIPTION":
//       return {
//         ...state,
//         subscriptions: [...state.subscriptions, action.payload],
//       };
//     case "REMOVE_SUBSCRIPTION":
//       return {
//         ...state,
//         subscriptions: state.subscriptions.filter(
//           (subscription) => subscription._id !== action.payload
//         ),
//       };
//     case "SET_SUBSCRIPTIONS":
//       return { ...state, subscriptions: action.payload };
//     case "UPDATE_SUBSCRIPTION":
//       return {
//         ...state,
//         subscriptions: state.subscriptions.map((subscription) =>
//           subscription._id === action.payload.id
//             ? { ...subscription, ...action.payload.updatedSubscription }
//             : subscription
//         ),
//       };
//     default:
//       return state;
//   }
// };

// // Combine reducers
// const rootReducer = combineReducers({
//   movieState: movieReducer,
//   subscriptionState: subscriptionReducer,
// });

// export default rootReducer;

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
