import React, { useEffect, useContext } from 'react';
import Link from 'next/link';
import { AUTH_TOKEN } from '../../constants/constants';
import { useRouter } from 'next/router';
import AuthContext from '../../constants/context';

const Header = () => {
  const route = useRouter();
  const { token } = useContext(AuthContext);

  // let authToken;
  // if () {
  //   authToken = window.localStorage.getItem(AUTH_TOKEN);
  // }

  return (
    <header className="container" style={{ marginBottom: '20px' }}>
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <Link href="/" className="no-underline black" style={{ cursor: 'pointer' }}>
            <div className="fw7 mr1">Hacker News</div>
          </Link>

          <Link href="/createlink" className="ml3 no-underline black">
            create link
          </Link>
          <div className="ml1">|</div>

          <Link href="/login" className="ml3 no-underline black">
            login
          </Link>
          <div className="ml1">|</div>
          <Link href="/register" className="ml3 no-underline black">
            register
          </Link>

          {/* <Link
            href={{
              pathname: '/new/[slug]',
              query: { slug: 1 },
            }}
            className="ml3 no-underline black"
          >
            new
          </Link> */}
          {token && (
            <div className="flex">
              <div className="ml1">|</div>
              <Link href="/search" className="ml1 no-underline black">
                search
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-fixed">
          {token ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.localStorage.removeItem(AUTH_TOKEN);
                  route.push(`/`);
                }
              }}
            >
              logout
            </div>
          ) : (
            <Link href="/login" className="ml1 no-underline black">
              login
            </Link>
          )}
        </div>
      </div>{' '}
      {/* <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" /> */}
    </header>
  );
};

export default Header;
