import { useState, useEffect } from "react";
import axios from "axios";

const MOVE_URL = "http://localhost:3011/movies";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(MOVE_URL);
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h3>Movies Page</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((move, index) => {
            return (
              <tr key={index}>
                <td>{move.name}</td>
                <td>{move.email}</td>
                <td>{move.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Movies;
