// Function to round a number to the nearest integer
function roundNumber(number) {
  return Math.round(number);
}

// Function to calculate the sum of two rounded numbers
function calculateNumber(a, b) {
  return roundNumber(a) + roundNumber(b);
}

// Export the function for testing
module.exports = calculateNumber;
