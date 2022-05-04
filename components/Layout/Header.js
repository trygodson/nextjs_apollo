import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Header = () => {
  return (
    <header className="container" style={{ marginBottom: '20px' }}>
      <div className="flex pa1  nowrap orange">
        <div
          className="flex justify-between flex-fixed black"
          style={{ justifyContent: 'space-between' }}
        >
          <div>
            <Link href="/" className="no-underline black">
              <div className="fw7 mr1">Hacker News</div>
            </Link>
          </div>
          <div className="flex">
            <Link href="/createlink" className="ml3 no-underline black">
              create link
            </Link>
            <div className="ml1">|</div>
            <Link href="/login" className="ml3 no-underline black">
              login
            </Link>
          </div>
        </div>
      </div>{' '}
      {/* <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" /> */}
    </header>
  );
};

export default Header;
