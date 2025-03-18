import React from "react";
import "./App.css"; // Import the CSS file

// Function to get the image path from the public folder
const getImagePath = (imageName) => `/SCP_react_application/images/${imageName}`;

const Card = ({ item }) => {
  return (
    <div className="card">
      <h2>Title: {item.title}</h2>
      <h3>Object Class: {item.object_class}</h3>

      {/* Display Image */}
      {item.image && (
        <img
          src={getImagePath(item.image.src)}
          alt={item.image.alt}
          className="scp-image"
        />
      )}

      {/* Special Containment Procedures */}
      <h3>Special Containment Procedures:</h3>
      <p>{item.special_containment_procedures}</p>

      {/* Description */}
      <h3>Description:</h3>
      <p>{item.description}</p>

      {/* Addenda Section */}
      {item.addenda && Object.keys(item.addenda).length > 0 && (
        <AddendaSection addenda={item.addenda} />
      )}

      {/* History Section */}
      {item.history && Object.keys(item.history).length > 0 && (
        <HistorySection history={item.history} />
      )}

      {/* Anomalies Section */}
      {item.anomalies && (
        <>
          <h3>Anomalies:</h3>
          <p>{item.anomalies}</p>
        </>
      )}

      {/* Additional Notes Section */}
      {item.additional_notes && (
        <>
          <h3>Additional Notes:</h3>
          <p>{item.additional_notes}</p>
        </>
      )}
    </div>
  );
};

const AddendaSection = ({ addenda }) => (
  <>
    <h3>Addenda:</h3>
    <ul>
      {Object.entries(addenda).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong>{" "}
          {Array.isArray(value) ? (
            <ul>{value.map((item, index) => <li key={index}>{item}</li>)}</ul>
          ) : (
            value
          )}
        </li>
      ))}
    </ul>
  </>
);

const HistorySection = ({ history }) => (
  <>
    <h3>History:</h3>
    <ul>
      {Object.values(history).map((entry, index) => (
        <ul key={index}>
          <strong>Date:</strong> {entry.date} <br />
          <strong>Event:</strong> {entry.event} <br />
          <br />
        </ul>
      ))}
    </ul>
  </>
);

export default Card;