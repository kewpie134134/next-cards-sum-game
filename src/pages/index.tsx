import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Link href="/game">
        <h2>はじめる</h2>
      </Link>
      <Link href="/manual">
        <h3>あそびかた</h3>
      </Link>
      <Link href="/counter">
        <h3>カウンターアプリ(Reducer 使用)</h3>
      </Link>
    </>
  );
};

export default Home;
