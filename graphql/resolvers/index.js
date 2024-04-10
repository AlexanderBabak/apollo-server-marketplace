const usersResolvers = require('./users');
const featureToggleResolvers = require('./featureToggles');
const productsResolvers = require('./products')

module.exports = {
    Query: {
        ...usersResolvers.Query,
        ...featureToggleResolvers.Query,
        ...productsResolvers.Query

    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...featureToggleResolvers.Mutation
    },
};