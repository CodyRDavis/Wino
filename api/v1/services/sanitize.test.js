const sanitize = require('./sanitize').check;
const assert = require('chai').assert


describe("Sanitization", function() {

  it("Should allow well formmated email addresses", function(done) {
    const req = {'body': {'email': 'thisemail@domain.com'}};
    const res = {'status': ()=>{return {'json': ()=>{}};}};

    sanitize(req, res, done);

  });

  it("Should not allow emails without an @ symbol", function() {
    const req = {'body': {'email': 'thisemaildomain.com'}};
    const checkCallback = {"success": true};
    const res = {
      'status': ()=>{
        return {
          'json': (json) => {
            checkCallback.success = json.success;
          }
        }
      }
    };

  sanitize(req, res, () => {});
  return assert.equal(checkCallback.success, false);
  });

  it("Should not allow emails without an . symbol", function() {
    const req = {'body': {'email': 'thisemail@domaincom'}};
    const checkCallback = {"success": true};
    const res = {
      'status': ()=>{
        return {
          'json': (json) => {
            checkCallback.success = json.success;
          }
        }
      }
    };

  sanitize(req, res, () => {});
  return assert.equal(checkCallback.success, false);
  });

  it("Should not allow emails without symbols", function() {
    const req = {'body': {'email': 'thisemaildomaincom'}};
    const checkCallback = {"success": true};
    const res = {
      'status': ()=>{
        return {
          'json': (json) => {
            checkCallback.success = json.success;
          }
        }
      }
    };

  sanitize(req, res, () => {});
  return assert.equal(checkCallback.success, false);
  });

  it("Should not allow emails with an $ symbol", function() {
    const req = {'body': {'email': '$thisemaildomaincom'}};
    const checkCallback = {"success": true};
    const res = {
      'status': ()=>{
        return {
          'json': (json) => {
            checkCallback.success = json.success;
          }
        }
      }
    };

  sanitize(req, res, () => {});
  return assert.equal(checkCallback.success, false);
  });

  it("Should allow well formatted incoming request data", function() {
    const req = {'body': {'blorb': 'string123ofChars8937'}};
    const res = {'status': ()=>{return {'json': ()=>{}};}};
    const checkCallback = {"success": false};

    sanitize(req, res, () => {checkCallback.success = true;});

    return assert.equal(checkCallback.success, true);
  });

  it("Should not allow incoming request data with the $ symbol", function() {
    const req = {'body': {'blorb': '$string123ofChars8937'}};
    const checkCallback = {"success": true};
    const res = {
      'status': ()=>{
        return {
          'json': (json) => {
            checkCallback.success = json.success;
          }
        }
      }
    };

    sanitize(req, res, () => {});

    return assert.equal(checkCallback.success, false);
  });
});
