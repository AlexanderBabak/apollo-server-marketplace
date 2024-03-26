const { model, Schema } = require("mongoose");

const featureToggleSchema = new Schema({
  showSales: { type: Boolean },
  showOldCollection: { type: Boolean },
});

module.exports = model("FeatureToggle", featureToggleSchema);