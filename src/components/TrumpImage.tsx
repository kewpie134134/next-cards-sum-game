import React from 'react';

type Props = {
  cardNumber: string;
};

const TrumpImage = (cardNumber: Props): JSX.Element => {
  const cardIndex = cardNumber.cardNumber;

  return (
    <div>
      <img src={`/images/card_${cardIndex}.png`} alt="card" />
    </div>
  );
};

export default TrumpImage;
