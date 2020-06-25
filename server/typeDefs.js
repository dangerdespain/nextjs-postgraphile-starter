const gql = require('graphql-tag')

const typeDefs = gql`
  
  type User {
    id: ID!
    email: String!
  }

  type Query {
    user(id: ID!): User
    users: [User]!
  }

`

module.exports = typeDefs