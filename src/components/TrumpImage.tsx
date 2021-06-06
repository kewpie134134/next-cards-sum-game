import React from 'react';
import Image from 'next/image';

type Props = {
  cardNumber: string;
};

const TrumpImage = (cardNumber: Props): JSX.Element => {
  const cardIndex = cardNumber.cardNumber;

  return (
    <div>
      <Image
        src={`/images/card_${cardIndex}.png`}
        alt="card"
        width={360}
        height={480}
      />
    </div>
  );
};

export default TrumpImage;
