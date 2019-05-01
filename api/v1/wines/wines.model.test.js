const wineSchema = require('./wines.model');
const mongoose = require('mongoose');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("Wine Model", function() {

  before(function(){
    mongoose.connect('mongodb://localhost/testDB', {useNewUrlParser: true});
    mongoose.connection
      .once('open', () => {})
      .on('error', (error) => {
        //console.warn("Error: ", error)
      });
  });

  after(function(){
    mongoose.disconnect();
  });

  // beforeEach("Clean the database before the next test", function(done) {
  //   mongoose.connection.dropCollection('wines', (error) => {
  //     //console.warn("Error: ", error);
  //     done();
  //   });
  // });

  it("Test wineTitle is required", function (done) {
    const wine = new wineSchema({});
    wine.validate(function(err){
      assert.equal(err.name, 'ValidationError');
      done();
    });
  });

  describe("Testing Defaults", function() {

    const wine = new wineSchema({'wineTitle':'testWineTitle'});

    it("wineProducer is 'Unknown'", function() {
      assert.equal(wine.wineProducer, "Unknown");
    });

    it("wineVintage is 'Unknown'", function() {
      assert.equal(wine.wineVintage, "Unknown");
    });

    it("createdOn is a date", function() {
      assert.instanceOf(wine.createdOn, Date);
    });

    it("lastUpdate is a date", function() {
      assert.instanceOf(wine.lastUpdate, Date);
    });

  });
});
