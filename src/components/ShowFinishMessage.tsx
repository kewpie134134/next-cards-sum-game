import React from 'react';

type arrayCounterProps = {
  arrayCounter: number;
};

const ShowFinishMessage = (
  arrayCounter: arrayCounterProps
): JSX.Element | null => {
  if (arrayCounter.arrayCounter !== 52) {
    return null;
  }
  return <p>FINISH!</p>;
};

export default ShowFinishMessage;
