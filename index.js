require("dotenv").config();
const { ApolloServer, AuthenticationError  }  = require('apollo-server');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const { DB_HOST, PORT } = process.env;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization;

      try {
        if (token) {
          const { user_id } = jwt.verify(token, "UNSAFESTRING");
          return { req, userID: user_id }
        } else {
          return { req }
        }
      } catch (error) {
        throw new AuthenticationError('Invalid or expired token');
      }
    },
    cors: {
      origin: '*',
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