const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
import { Resolvers, Product } from './src/generated/graphql';

const typeDefs = importSchema('schema.gql');

// A map of functions which return data for the schema.
const resolvers: Resolvers = {
  Query: {
    product: async (_parent, args, _context, _info) => ({} as Product),
    products: async (_parent, args, _context, _info) => ([] as Product[]),
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
