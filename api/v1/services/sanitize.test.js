const sanitize = require('./sanitize').check;

test('Testing good incoming request data - email format', () => {

  const req = {'body': {'email': 'thisemail@domain.com'}};
  const res = {'status': ()=>{return {'json': ()=>{}};}};
  mockPassedCallback = jest.fn();
  mockPassedCallback.mockReturnValue(true);

  sanitize(req, res, mockPassedCallback);

  expect(mockPassedCallback.mock.results[0].value).toBe(true)
});

test('Testing bad incoming request data - no @ in email format', () => {
  const req = {'body': {'email': 'thisemaildomain.com'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  sanitize(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(false);
})

test('Testing bad incoming request data - no . in email format', () => {
  const req = {'body': {'email': 'thisemail@domaincom'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  sanitize(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(false);
})

test('Testing bad incoming request data - no symbols in email format', () => {
  const req = {'body': {'email': 'thisemaildomaincom'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  sanitize(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(false);
})

test('Testing bad incoming request data - $ in email format', () => {
  const req = {'body': {'email': '$thisemail@domaincom'}};
  mockResultJson = jest.fn();
  const res = {'status': ()=>{return {'json': mockResultJson};}};
  mockPassedCallback = jest.fn();

  sanitize(req, res, mockPassedCallback);

  expect(mockResultJson.mock.calls[0][0].success).toEqual(false);
})

test('Testing good incoming request data - not email', () => {
  const req = {'body': {'blorb': 'string123ofChars8937'}};
  const res = {'status': ()=>{return {'json': ()=>{}};}};
  mockPassedCallback = jest.fn();
  mockPassedCallback.mockReturnValue(true);

  sanitize(req, res, mockPassedCallback);

  expect(mockPassedCallback.mock.results[0].value).toBe(true)
})
