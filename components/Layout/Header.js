import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Header = () => {
  return (
    <Head className="container">
      <div className="">
        <Link href="/">
          <a>some</a>
        </Link>
      </div>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />
    </Head>
  );
};

export default Header;
