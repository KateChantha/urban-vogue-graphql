import { from } from 'apollo-boost';
import React from 'react'
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost'

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component'

const GET_COLLECTIONS = gql`
  {
    collections {
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
 * - Query component receive the actual graphQL query that we want to make
 * - it's going to fetch data and give it back a function that works like consumer function in context API -- which allow us to have an access to the data that we wanted
 * - on that function, it's going to be an object that holds many differnt properties that get pass in
 * - in this file, the propties that we care about is the loading, error and data
 */
const CollectionsOverviewContainer = () => {
  return (
    <Query query={GET_COLLECTIONS}>
      {({ loading, error, data }) => {
        console.log({loading})
        console.log({error})
        console.log({data})

        if (loading) return <Spinner />
        return <CollectionsOverview collections={data.collections} />
      }}
    </Query>
  )
}

export default CollectionsOverviewContainer;
