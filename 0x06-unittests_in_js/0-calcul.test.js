// Import the assert module for testing
const assert = require("assert");

// Import the function to be tested
const calculateNumber = require("./0-calcul.js");

// Describe the test suite
describe("calculateNumber", function () {
  // Test the normal cases
  it("should return 4 when given 1 and 3", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("should return 5 when given 1 and 3.7", function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it("should return 5 when given 1.2 and 3.7", function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("should return 6 when given 1.5 and 3.7", function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Test the edge cases
  it("should return 0 when given 0 and 0", function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it("should return -2 when given -1 and -1.4", function () {
    assert.strictEqual(calculateNumber(-1, -1.4), -2);
  });

  it("should return 1 when given 0.4 and 0.6", function () {
    assert.strictEqual(calculateNumber(0.4, 0.6), 1);
  });

  it("should return NaN when given non-numbers", function () {
    assert.strictEqual(isNaN(calculateNumber("a", "b")), true);
  });
});
