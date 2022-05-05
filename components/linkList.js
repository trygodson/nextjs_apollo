import React from 'react';
import Link from './link';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { LINKS_PER_PAGE } from '../constants/constants';

export const FEED_QUERY = gql`
  {
    links {
      id
      url
      description
    }
  }
`;

const LinkList = () => {
  const router = useRouter();

  // const isNewPage = router.pathname.includes('new');
  // const pageIndexParams = router.pathname.split('/');
  // const page = parseInt(pageIndexParams[pageIndexParams.length - 1]);
  // const pageIndex = page ? (page - 1) * LINKS_PER_PAGE : 0;

  // const getQueryVariables = (isNewPage, page) => {
  //   const skip = isNewPage ? (page - 1) * LINKS_PER_PAGE : 0;
  //   const take = isNewPage ? LINKS_PER_PAGE : 100;
  //   const orderBy = { createdAt: 'desc' };
  //   return { take, skip, orderBy };
  // };
  const { data, loading, error } = useQuery(FEED_QUERY);

  // const getLinksToRender = (isNewPage, data) => {
  //   if (isNewPage) {
  //     return data.feed.links;
  //   }
  //   const rankedLinks = data.feed.links.slice();
  //   rankedLinks.sort((l1, l2) => l2.votes.length - l1.votes.length);
  //   return rankedLinks;
  // };
  // const linksToRender = [
  //   {
  //     id: 'link-id-1',
  //     description: 'Prisma gives you a powerful database toolkit 😎',
  //     url: 'https://prisma.io',
  //   },
  //   {
  //     id: 'link-id-2',
  //     description: 'The best GraphQL client',
  //     url: 'https://www.apollographql.com/docs/react/',
  //   },
  // ];

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && (
        <>
          {data.links.map((link, index) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </>
  );
};

export default LinkList;
