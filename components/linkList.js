import React from 'react';
import Link from './link';
import { gql, useQuery } from '@apollo/client';

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);
  console.log(data);
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
    <div>
      {data?.feed.links.map(link => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;
