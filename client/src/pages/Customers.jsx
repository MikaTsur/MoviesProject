import { useState, useEffect } from "react";
import axios from "axios";

const CUST_URL = "http://localhost:3011/customers";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(CUST_URL);
      setCustomers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h3>Customers Page</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust, index) => {
            return (
              <tr key={index}>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Customers;
