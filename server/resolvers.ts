import { AuthenticationError, UserInputError } from 'apollo-server-micro'

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

export default resolvers