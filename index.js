require("dotenv").config();
const { ApolloServer }  = require('apollo-server');
const mongoose = require('mongoose');
const cors = require("cors");

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const { DB_HOST, PORT } = process.env;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
    cors: {
      origin: '*',
      credentials: true
    }
});

const connection = mongoose.connect(DB_HOST, { useNewUrlParser: true })

connection
  .then(() => {
        console.log("MongoDB Connected");
        return server.listen({port: PORT || 4000});
    })
  .then((res) => {
        console.log(`Server running at ${res.url}`)
  });