const sanitize = require('./sanitize').check;

test('Testing a good email format', () => {

  const req = {'body': {'email': 'thisemail@domain.com'}};
  const res = {'status': ()=>{return {'json': ()=>{}};}};
  mockPassedCallback = jest.fn();
  mockPassedCallback.mockReturnValue(true);

  sanitize(req, res, mockPassedCallback);

  expect(mockPassedCallback.mock.results[0].value).toBe(true)
});

test('Testing an email without the @ symbol', () => {
  const req = {'body': {'email': 'thisemaildomain.com'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  sanitize(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(false);
})

test('Testing an email without the . symbol', () => {
  const req = {'body': {'email': 'thisemail@domaincom'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  sanitize(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(false);
})

test('Testing an email without any symbols', () => {
  const req = {'body': {'email': 'thisemaildomaincom'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  sanitize(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(false);
})

test('Testing an email with $ symbol', () => {
  const req = {'body': {'email': '$thisemail@domaincom'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  sanitize(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(false);
})
