const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');

const typeDefs = importSchema('schema.gql');

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
