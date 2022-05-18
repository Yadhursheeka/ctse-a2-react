import React, { useState } from "react";
import axios from "axios";

function App() {
  const [login, setLogin] = useState("Not Logged In");
  const [products, setProducts] = useState("Products Not retrieved");
  const [payment, setPayment] = useState("Not Paid");

  const getLogin = async () => {
    const response = await axios.get("http://34.133.230.64");

    setLogin(response.data.Login);
  };

  const getProducts = async () => {
    const response = await axios.get("http://34.69.145.8:8080");
    setProducts(response.data);
  };

  const getPayment = async () => {
    const response = await axios.get("http://34.70.220.201:8080/api/service");

    setPayment(response.data);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <button onClick={getLogin}>Login</button>
        <p>{login}</p>
      </div>
      <div>
        <button onClick={getProducts}>Get Products</button>
        <p>{products}</p>
      </div>
      <div>
        <button onClick={getPayment}>Pay</button>
        <p>{payment}</p>
      </div>
    </div>
  );
}

export default App;
