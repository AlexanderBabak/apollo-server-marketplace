const usersResolvers = require('./users');
const featureToggleResolvers = require('./featureToggles');

module.exports = {
    Query: {
        ...usersResolvers.Query,
        ...featureToggleResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...featureToggleResolvers.Mutation
    },
};