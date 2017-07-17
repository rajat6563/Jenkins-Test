var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

var server = supertest.agent("http://localhost:4000");

// UNIT test begin

describe('Array1', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});

describe('Array2', function() {
  describe('#indexOf()', function() {
    it('should return index for array when the value is present', function() {
      [1,2,3].indexOf(1).should.equal(0);
      [1,2,3].indexOf(2).should.equal(1);
    });
  });
});