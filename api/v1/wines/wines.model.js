const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const Wine = mongoose.model('Wine', {
  officalImageURI: String,
  userImageURIs:[String],
  vendorURLs: [String],
  criticReviewURLs: [String],
  producerURL: String,
  flavorNoteTags: [{flavor: String, frequency: Number}],
  wineCategory: String,
  wineRegion: String,
  wineTitle: {type:String, required:true},
  wineOrigin: String,
  wineProducer: {type:String, required:true, default:"Unknown"},
  wineContent: String,
  wineVintage: {type:String, required:true, default:"Unknown"},
  avgUsrRating: Number,
  weightedAvgPrice: Number,
  createdOn: {type:Date, default:Date.now},
  lastUpdate: {type:Date, default:Date.now}
});

module.exports = Wine;
