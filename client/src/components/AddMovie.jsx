// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { doAddMovie } from "../redux/actions";

// const AddMovie = () => {
//   const dispatch = useDispatch();

//   // That's just the way those hooks are designed. The job of these hooks is "please give me the dispatch function"
//   // and "please give me the history object" respectively. It's a way of getting a dependency into your component without passing it in as a prop.
//   // So all these hooks do is return that piece of data, and then your component can use it from there as it sees fit.

//   // The dispatch function is used to send actions to the Redux store. When an action is dispatched, it passes through the store's reducer(s),
//   // which update the state based on the action type and payload. This process triggers a re-render of the components subscribed to the state changes,
//   // ensuring the UI reflects the current state of the application.

//   const [movie, setMovie] = useState({ serialNo: "", name: "", price: 0 });

//   return (
//     <div
//       style={{
//         border: "3px solid red",
//         width: "300px",
//         height: "150px",
//         padding: "10px",
//         textAlign: "center",
//       }}
//     >
//       <h3>Order New Movie</h3>
//       Serial No.:{" "}
//       <input
//         type="number"
//         onChange={(e) => setMovie({ ...movie, serialNo: e.target.value })}
//       />
//       <br />
//       Name:{" "}
//       <input
//         type="text"
//         onChange={(e) => setMovie({ ...movie, name: e.target.value })}
//       />
//       <br />
//       Price:{" "}
//       <input
//         type="number"
//         onChange={(e) => setMovie({ ...movie, price: +e.target.value })}
//       />
//       <br />
//       <button onClick={() => dispatch(doAddMovie(movie))}>Add</button>
//     </div>
//   );
// };

// export default AddMovie;
