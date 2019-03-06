const mongoose = require('mongoose');

const Wine = mongoose.model('Wine', {
  imageURL: String,
  vendorURLS: [String],
  criticReviewURlS: [String],
  producerURL: String,
  flavorNoteTags: [{flavor: String, frequency: Number}],
  wineCategory: String,
  wineRegion: String,
  wineTitle: String,
  wineOrigin: String,
  wineProducer: String,
  wineContent: String,
  wineVintage: Date,
  avgUsrRating: Number,
  weightedAvgPrice: Number,
  createdOn: Date,
  lastUpdate: Date
});

module.exports = Wine;
