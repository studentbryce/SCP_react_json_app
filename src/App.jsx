import React, { useState, useEffect } from "react";
import "./App.css"; // Import CSS
import Navbar from "./Navbar"; // Import Navbar
import Header from "./Header"; // Import Header
import Card from "./Card"; // Import Card
import Homepage from "./Homepage"; // Import Homepage

const App = () => {
  const [data, setData] = useState([]); // Store JSON data
  const [selectedCard, setSelectedCard] = useState(null); // Track selected card
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setError(null);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="container">
      <Navbar data={data} onSelect={setSelectedCard} /> {/* Navbar */}
      <Header /> {/* Header */}

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Show Homepage if no card is selected, otherwise show the selected card */}
      <div className="content">
        {selectedCard ? <Card item={selectedCard} /> : <Homepage data={data} onSelect={setSelectedCard} />}
      </div>
    </div>
  );
};

export default App;
