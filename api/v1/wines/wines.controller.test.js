const controller = require('./wines.controller');
const wineModel = require('./wines.model');
const mongoose = require('mongoose');
const assert = require('chai').assert;

mongoose.set('useFindAndModify', false);

describe("Wine Controller Update", function() {

  before("Connect to the test database", function(){
    mongoose.connect('mongodb://localhost/testDB', {useNewUrlParser: true});
    mongoose.connection
      .once('open', () => {})
      .on('error', (error) => {
        //console.warn("Error: ", error)
      });
  });

  after("Disconnect politely from the test database", function(){
    mongoose.disconnect();
  });

  // beforeEach("Clean the database before the next test", function(done) {
  //   mongoose.connection.dropCollection('wines', (error) => {
  //     //console.warn("Error: ", error);
  //     done();
  //   });
  // });

  it("If record exists then output is the updated record", function(done) {
    const wine = new wineModel({'wineTitle':'testTitle'});
    wine.save(function (error, wine) {
      //console.warn("Error: ", error)
      console.log(wine.id);
    });
    const req = {'body':{
      '_id':wine.id,
      'wineUpdate':{'wineVintage':'1992'}}};
    const res = {
      'status': ()=>{
        return {'json': (jsonRes)=>{
          console.log(jsonRes);
          done();
          }
        };
      }
    };

    console.log(mongoose.Types.ObjectId(wine._id));
    controller.updateWine(req, res, ()=>{});
  });

});

  // it("should handle an update request", function() {
  //     const req = {'body': {'email': 'thisemail@domain.com'}};
  //     const checkCallback = {'success': true};
  //     const res = {'status': ()=>{
  //       return {'json': (json) => {
  //         checkCallback.success = json.success;
  //         }
  //       }
  //     }};
  //
  //     controller.updateWine(req, res, () => {});
  //     return assert.equal(checkCallback.success, true);
  // });

// test('Testing Wine Controller - Update Wine Result', () => {
//   const req = {'body': {'email': 'thisemail@domain.com'}};
//   mockResultJson = jest.fn();
//   const res = {'status': ()=>{return {'json': mockResultJson};}};
//   mockPassedCallback = jest.fn();
//
//   controller.updateWine(req, res, mockPassedCallback);
//
//   expect(mockResultJson.mock.calls[0][0].success).toEqual(true);
// });
//
// test('Testing Wine Controller - Get Wine Result', () => {
//   const req = {'body': {'email': 'thisemail@domain.com'}};
//   mockResultJson = jest.fn();
//   const res = {'status': ()=>{return {'json': mockResultJson};}};
//   mockPassedCallback = jest.fn();
//
//   controller.getWine(req, res, mockPassedCallback);
//
//   expect(mockResultJson.mock.calls[0][0].success).toEqual(true);
// });
//
// test('Testing Wine Controller - Create Wine Result', () => {
//   const req = {'body': {'email': 'thisemail@domain.com'}};
//   mockResultJson = jest.fn();
//   const res = {'status': ()=>{return {'json': mockResultJson};}};
//   mockPassedCallback = jest.fn();
//
//   controller.createWine(req, res, mockPassedCallback);
//
//   expect(mockResultJson.mock.calls[0][0].success).toEqual(true);
// });
//
// test('Testing Wine Controller - Delete Wine Result', () => {
//   const req = {'body': {'email': 'thisemail@domain.com'}};
//   mockResultJson = jest.fn();
//   const res = {'status': ()=>{return {'json': mockResultJson};}};
//   mockPassedCallback = jest.fn();
//
//   controller.deleteWine(req, res, mockPassedCallback);
//
//   expect(mockResultJson.mock.calls[0][0].success).toEqual(true);
// });
