import React from "react";
import "./App.css"; // Import the CSS file

// Function to get the image path from the public folder
const getImagePath = (imageName) => `/SCP_react_application/images/${imageName}`;

const Homepage = ({ data, onSelect }) => {
  return (
    <div className="homepage">
      {data.map((item, index) => (
        <div key={index} className="homepage-item" onClick={() => onSelect(item)}>
          {item.image && (
            <img
              src={getImagePath(item.image.src)}
              alt={item.image.alt}
              className="homepage-image"
            />
          )}
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Homepage;

