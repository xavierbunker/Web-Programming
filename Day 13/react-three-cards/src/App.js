import React from "react";
import Card from "./card";
import "./App.css"; 
import "./Card.css"; //Import CSS for styling

function App() {
  const cards = [
    { title: "Card 1", content: "This is the first card", color: "#FF5733" },
    { title: "Card 2", content: "This is the second card", color: "#33FF57" },
    { title: "Card 3", content: "This is the third card", color: "#3357FF" },
  ];

  return (
      <div className="container">
        {cards.map((card, index) => (
          <Card key={index} {...card}
          />
        ))}
      </div>
  );
}
export default App;
