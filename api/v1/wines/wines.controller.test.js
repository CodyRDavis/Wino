const controller = require('./wines.controller');
const wineModel = require('./wines.model');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe("Wine Controller Update", function() {

  before(function(){
    mongoose.connect('mongodb://localhost/testDB', {useNewUrlParser: true});
  });

  after(function(){
    mongoose.disconnect();
  });

  it("If record exists then output is the updated record", function() {
    const wine = new wineModel({'wineTitle':'testTitle'});
    const req = {'body':{
      'wineTitle':'testTitle',
      'wineUpdate':{'wineVintage':'1992'}}}
    const result = {'success':false, data:{}}
    const res = {
      'status': ()=>{
        return {'json': (jsonRes)=>{
          result.success = jsonRes.success;
          result.data = jsonRes.data;
          }
        };
      }
    };
    wine.save()

    controller.updateWine(req, res, ()=>{});
    console.log(result.data)
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
