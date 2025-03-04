// CardList.js
import React from 'react';
import Card from './card';

function CardList() {
  const cards = [
    {
      title: 'Card 1',
      content: 'This is the first card.',
      buttonColor: 'lightblue',
      backgroundColor: 'lightyellow',
    },
    {
      title: 'Card 2',
      content: 'This is the second card.',
      buttonColor: 'lightgreen',
      backgroundColor: 'lightcyan',
    },
    {
      title: 'Card 3',
      content: 'This is the third card.',
      buttonColor: 'lightcoral',
      backgroundColor: 'lightgray',
    },
  ];

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          buttonColor={card.buttonColor}
          backgroundColor={card.backgroundColor}
        />
      ))}
    </div>
  );
}

export default CardList;