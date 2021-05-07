import { gql } from 'apollo-boost'

export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
`
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

// once get the data object { cartHidden }
// then write a new state to data { cartHidden: !cartHidden }
export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, {cache}) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN
      })

      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden }
      })

      return !cartHidden
    }
  }
}