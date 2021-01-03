import React, { useState } from 'react';
import classes from './NewCard.module.scss';

const NewCard = ({ userCards, onAddCard }) => {
  const [cardName, setCardName] = useState('');
  const [cardDescription, setCardDescription] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    setCardName('');
    setCardDescription('');

    onAddCard(cardName, cardDescription);
  };

  return (
    <div className={classes.NewCard}>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <label htmlFor='card-name'>Card Name</label>
        <input
          required
          type='text'
          name='card-name'
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />

        <label htmlFor='card-description'>Card Description</label>
        <input
          required
          type='text'
          name='card-description'
          value={cardDescription}
          onChange={(e) => setCardDescription(e.target.value)}
        />

        <label htmlFor='color'>Color</label>
        <input type='color' name='color' />

        <button type='submit'>Add To Collection</button>
      </form>

      <div className={classes.UserCards}>
        {userCards.map((card) => (
          <div key={card.id} className={classes.UserCard}>
            <p>{card.text}</p>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCard;
