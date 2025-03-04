import React from "react";
import "./Card.css"; //Import CSS for styling

function Card({ title, buttonColor, backgroundColor, content }) {
  const handleClick = () => {
    alert(title);
  };

  return (
    <div className="card" style={{ backgroundColor: backgroundColor }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button
        className="card-button"
        onClick={handleClick}
        style={{ backgroundColor: buttonColor }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default Card;