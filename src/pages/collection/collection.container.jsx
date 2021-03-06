
import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

/**
 * query with variable $title
 * write a 'query' here in order to pass title dynamically. 
 */
const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

/**
 * @desc query with variables
 */
const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: match.params.collectionId }}
  >
    {({ loading, data }) => {
      return loading ? (
        <Spinner />
      ) : (
        <CollectionPage collection={data.getCollectionsByTitle} />
      );
    }}
  </Query>
);

export default CollectionPageContainer;