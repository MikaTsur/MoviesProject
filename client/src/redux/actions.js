// C:\Users\morellyo\react_project\ex\client\src\redux\actions.js ===

// Movie actions
const doRemoveMovie = (id) => {
  return { type: "REMOVE", payload: id };
};

const doAddMovie = (movie) => {
  return { type: "ADD", payload: movie };
};

const doSetMovies = (movies) => {
  return { type: "SET_MOVIES", payload: movies };
};

const doUpdateMovie = (id, updatedMovie) => {
  return { type: "UPDATE", payload: { id, updatedMovie } };
};

// Subscription actions, using a distinct prefix to avoid type conflicts
const doRemoveSubscription = (id) => {
  return { type: "REMOVE_SUBSCRIPTION", payload: id };
};

const doAddSubscription = (subscription) => {
  return { type: "ADD_SUBSCRIPTION", payload: subscription };
};

const doSetSubscriptions = (subscriptions) => {
  return { type: "SET_SUBSCRIPTIONS", payload: subscriptions };
};

const doUpdateSubscription = (id, updatedSubscription) => {
  return { type: "UPDATE_SUBSCRIPTION", payload: { id, updatedSubscription } };
};

export {
  doRemoveMovie,
  doAddMovie,
  doSetMovies,
  doUpdateMovie,
  doRemoveSubscription,
  doAddSubscription,
  doSetSubscriptions,
  doUpdateSubscription,
};
