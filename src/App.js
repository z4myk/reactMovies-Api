import React, { useState, useEffect } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { Navigation } from "./components/Navigation";

function App() {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState("");
  const API_KEY = "apikey=d4e3631";

  const handleInputChange = (e) => {
    setMovie(e.target.value);
  };

  const obtenerAPI = async (movie) => {
    const url = `https://www.omdbapi.com/?s=${movie}&plot=full&${API_KEY}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    if (resultado.Search) {
      setData(resultado.Search);
    }

  };

  useEffect(() => {
    obtenerAPI(movie)
  }, [movie]);

  return (
    <>
      <Navigation 
      handleInputChange={handleInputChange} 
      />
      <div className="d-flex flex-wrap body">
        <Movies 
        data={data} 
        />
      </div>
      <footer className="bg-dark p-3">
        <h6 className="text-center text-light">
          Developed by Sebastián Mosquera with <span className="text-danger">♥</span>
        </h6>
      </footer>
    </>
  );
}

export default App;
