//C:\Users\morellyo\react_project\ex\client\src\redux\rootReducer.js =================================

import { combineReducers } from "redux";

// Initial state
const initialState = {
  movies: [],
  subscriptions: [],
};

// Combined reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Movie cases
    case "ADD":
      return {
        ...state,
        movies: [...state.movies, { ...action.payload }],
      };
    case "REMOVE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    case "UPDATE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === action.payload.id
            ? { ...movie, ...action.payload.updatedMovie }
            : movie
        ),
      };

    // Subscription cases
    case "ADD_SUBSCRIPTION":
      return {
        ...state,
        subscriptions: [...state.subscriptions, action.payload],
      };
    case "REMOVE_SUBSCRIPTION":
      return {
        ...state,
        subscriptions: state.subscriptions.filter(
          (subscription) => subscription._id !== action.payload
        ),
      };
    case "SET_SUBSCRIPTIONS":
      return { ...state, subscriptions: action.payload };
    case "UPDATE_SUBSCRIPTION":
      return {
        ...state,
        subscriptions: state.subscriptions.map((subscription) =>
          subscription._id === action.payload.id
            ? { ...subscription, ...action.payload.updatedSubscription }
            : subscription
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
