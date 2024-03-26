const FeatureToggle = require('../../models/FeatureToggle');
const { ApolloError } = require('apollo-server-errors');


const ID = "660192c38e7ff94d902bce70"; // hardcode


module.exports = {
  Mutation: {
    async changeFeatureToggle(_, {values: {showSales, showOldCollection} }) {

     const featureToggle = await FeatureToggle.findById(ID);

      if (!featureToggle) {
        const newFeatureToggle = new FeatureToggle({
          showSales,
          showOldCollection,
        });

        const res = await newFeatureToggle.save();

        return {
          id: res.id,
          ...res._doc
        };
      } else {

        featureToggle.showSales = showSales;
        featureToggle.showOldCollection = showOldCollection;

        try {
          const res = await featureToggle.save()
          return {
            id: res.id,
             ...res._doc
          };

        } catch {
          throw new ApolloError('Failed to update Feature Toggle', 'UPDATE_FAILED');
        }

      }


    },
  },
  Query: {
    async getFeatureToggle(){ return FeatureToggle.findById(ID)},
  }
}