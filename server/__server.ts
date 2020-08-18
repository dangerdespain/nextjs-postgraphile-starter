import { responsePathAsArray } from "graphql";

import { ApolloServer, gql } from 'apollo-server-micro'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

export const config = {
  api: {
    bodyParser: false,
  },
}

// console.log(resolvers, typeDefs)

const server = new ApolloServer({ typeDefs, resolvers });
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// })

export default server