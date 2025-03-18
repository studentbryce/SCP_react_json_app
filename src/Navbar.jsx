import React from "react";
import './App.css';

const Navbar = ({ data, onSelect }) => {
  return (
    <nav className="navbar">
      <ul>
        {/* Add Home link */}
        <li>
        <button onClick={() => window.location.href = "/SCP_react_json_app/"}>Home</button>
        </li>
        {data.map((item, index) => (
          <li key={index}>
            <button onClick={() => onSelect(item)} className="">{item.title}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
