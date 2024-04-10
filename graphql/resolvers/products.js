const Product = require('../../models/Product');
const { ApolloError } = require('apollo-server-errors');

module.exports = {
  Query: {
    async getAllProducts(){
      return Product.find()
    },
    async getProductById(_, {ID}){ return Product.findById(ID)},
  }
}