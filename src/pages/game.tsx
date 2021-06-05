import React, { useEffect, useState } from 'react';

import { ZERO, ONE, NUMBER_OF_TRUMP, HYPHEN } from '../utils/Constant';
import { ARRAY_OF_TRUMP, OBJECT_OF_TRUMP } from '../utils/Trump';
import { shuffleArray } from '../components/MakeArray';
import TrumpImage from '../components/TrumpImage';
import ShowFinishMessage from '../components/ShowFinishMessage';

const Game = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<string[]>([]);
  const [arrayCounter, setArrayCounter] = useState(ZERO);
  const [arrayIndex, setArrayIndex] = useState<string>(HYPHEN);
  const [sumTrumpCardNumber, setSumTrumpCardNumber] = useState<number>(ZERO);

  // ランダムな配列を、初回読み込み時に作成
  useEffect(() => {
    // トランプ 52 枚のランダムな配列を作成
    setRandomArray(shuffleArray(ARRAY_OF_TRUMP));
  }, []);

  // ボタンを押された時の処理を実装
  const showArrayNumber = () => {
    if (arrayCounter < NUMBER_OF_TRUMP) {
      setArrayIndex(randomArray[arrayCounter]);
      setArrayCounter(arrayCounter + ONE);
      setSumTrumpCardNumber(
        sumTrumpCardNumber + OBJECT_OF_TRUMP[randomArray[arrayCounter]]
      );
    } else {
      alert('終わりだよ！');
    }
  };

  // リセットボタンが押された時の処理を実装
  const resetArrayCounter = () => {
    setArrayCounter(ZERO);
    setArrayIndex(HYPHEN);
    setSumTrumpCardNumber(ZERO);
    setRandomArray(shuffleArray(ARRAY_OF_TRUMP));
  };

  return (
    <>
      <p>arrayCounter: {arrayCounter}</p>
      <p>sumTrumpCardNumber: {sumTrumpCardNumber}</p>
      <ShowFinishMessage arrayCounter={arrayCounter} />
      <button onClick={showArrayNumber}>押して！</button>
      <button onClick={resetArrayCounter}>リセット</button>
      <div>
        <TrumpImage cardNumber={arrayIndex} />
      </div>
    </>
  );
};

export default Game;
