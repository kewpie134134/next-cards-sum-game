import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Link href="/game">
        <h2>はじめる</h2>
      </Link>
      <Link href="/manual">
        <h3>あそびかた</h3>
      </Link>
    </>
  );
};

export default Home;
