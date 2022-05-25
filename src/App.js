import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [rickandmorty, setRickandmorty] = useState([]);
  function name(name) {
    console.log(name);
  }
  // const name = (name) => {
  //   console.log(name);
  // };
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((data) => {
        setRickandmorty(data.data.results);
        console.log(data.data.results);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      {rickandmorty.map((p) => (
        <div>
          <h2>{p.name}</h2>
          <img src={p.image} alt="img" />
          <button onClick={() => name(p.name)}>Get Name</button>
        </div>
      ))}
    </div>
  );
}

export default App;
