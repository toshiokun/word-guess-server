const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
import { Resolvers, User, Word, Game } from './src/generated/graphql';

const typeDefs = importSchema('schema.gql');

// A map of functions which return data for the schema.
const resolvers: Resolvers = {
  Query: {
    user: async (_parent, args, _context, _info) => ({} as User),
    users: async (_parent, args, _context, _info) => ([] as User[]),
    word: async (_parent, args, _context, _info) => ({} as Word),
    words: async (_parent, args, _context, _info) => ([] as Word[]),
    game: async (_parent, args, _context, _info) => ({} as Game),
    games: async (_parent, args, _context, _info) => ([] as Game[]),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
