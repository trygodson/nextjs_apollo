import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FEED_QUERY } from './linkList';

const CREATE_LINK_MUTATION = gql`
  mutation CreateLinkMutation($description: String!, $url: String!) {
    createLink(description: $description, url: $url) {
      description
      url
    }
  }
`;

const CreateLinkComponent = () => {
  const route = useRouter();
  const [formState, setFormState] = useState({
    description: '',
    url: '',
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url,
    },
    // update: (cache, { data: { post } }) => {
    //   const data = cache.readQuery({
    //     query: FEED_QUERY,
    //   });

    //   cache.writeQuery({
    //     query: FEED_QUERY,
    //     data: {
    //       feed: {
    //         links: [post, ...data.feed.links],
    //       },
    //     },
    //   });
    // },
    onCompleted: data => {
      console.log(data);
      route.push('/');
    },
  });
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={e =>
              setFormState({
                ...formState,
                description: e.target.value,
              })
            }
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={e =>
              setFormState({
                ...formState,
                url: e.target.value,
              })
            }
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLinkComponent;
