const { AuthenticationError, UserInputError } = require('apollo-server-micro')

const resolvers = {
  Query: {
    async users(_parent, _args, context, _info){
      return []
    },
    async user(_parent, _args, context, _info){
      return { id : _args.id }
    },
  },
  // Mutation: {},
}

module.exports = resolvers