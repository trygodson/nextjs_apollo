import { useContext } from 'react';

import { AUTH_TOKEN, LINKS_PER_PAGE } from '../constants/constants.js';
import { timeDifferenceForDate } from '../constants/utils.js';
import { gql, useMutation } from '@apollo/client';
import { FEED_QUERY } from './linkList.js';
import AuthContext from '../constants/context.js';

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: Int!) {
    createVote(linkId: $linkId) {
      link {
        id
        description
        postedBy
      }
      user {
        id
        username
      }
    }
  }
`;

const Link = props => {
  const { token } = useContext(AuthContext);
  const { link } = props;
  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: parseInt(link.id),
    },
    onCompleted: data => {
      route.push('/');
    },
  });
  console.log(link);
  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{link.id + 1}.</span>
        {token && (
          <div className="ml1 gray f11" style={{ cursor: 'pointer' }} onClick={vote}>
            ▲
          </div>
        )}
      </div>
      <div className="ml1">
        <div>
          {link.description} ({link.url})
        </div>
        {
          <div className="f6 lh-copy gray">
            {link.votes?.length} votes | by {link.postedBy ? link.postedBy.name : 'Unknown'}{' '}
            {timeDifferenceForDate(link.createdAt)}
          </div>
        }
      </div>
    </div>
  );
};

export default Link;
