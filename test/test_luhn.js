var assert = require("chai").assert;
var check = require("../lib/luhn");
var checker = require("../lib/index");

describe("validateLength", function() {
  it("should return false if the account number is not the correct length", function() {
    var num = 799273987;
    var result = check.confirmLength(num)
    assert.isFalse(result);
  });
  it("should return true if the account number is correct length", function() {
    var num = 79927398713;
    var result = check.confirmLength(num)
    assert.isTrue(result);
  });
});

describe("validateType", function() {
  it("should return false if the account number is not typeof number", function() {
    var num = "79927398711";
    var result = check.confirmType(num)
    assert.isFalse(result);
  });
  it("should return true if the account number is typeof number", function() {
    var num = 79927398711;
    var result = check.confirmType(num)
    assert.isTrue(result);
  });
});

describe("Validate", function() {
  it("should return true if the account number is valid", function() {
    var num = 79927398713;
    var checkDigit = check.getCheckDigit(num)
    var computedDigit = check.getComputedDigit(num)
    var result = checker.validate(checkDigit, computedDigit);
    assert.isTrue(result);
  });
  it("should return false if the account number is not valid", function() {
    var num = 79927398711;
    var checkDigit = check.getCheckDigit(num)
    var computedDigit = check.getComputedDigit(num)
    var result = checker.validate(checkDigit, computedDigit);
    assert.isFalse(result);
  });
});


// 79927398710, 79927398711, 79927398712, 79927398713, 79927398714, 79927398715, 79927398716, 79927398717, 79927398718, 79927398719

