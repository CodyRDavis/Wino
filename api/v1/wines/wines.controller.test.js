const controller = require('./wines.controller')

test('Testing Wine Controller - Update Wine Result', () => {
  const req = {'body': {'email': 'thisemail@domain.com'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  controller.updateWine(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(true);
});

test('Testing Wine Controller - Get Wine Result', () => {
  const req = {'body': {'email': 'thisemail@domain.com'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  controller.getWine(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(true);
});

test('Testing Wine Controller - Create Wine Result', () => {
  const req = {'body': {'email': 'thisemail@domain.com'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  controller.createWine(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(true);
});

test('Testing Wine Controller - Delete Wine Result', () => {
  const req = {'body': {'email': 'thisemail@domain.com'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  controller.deleteWine(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(true);
});
