// Import the readline module
const readline = require('readline');

// Create an instance of the readline interface
const rl = readline.createInterface({
  input: process.stdin, // Use the standard input stream
  output: process.stdout, // Use the standard output stream
});

// Display a message and wait for user input
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // The name parameter contains the user input
  console.log(`Your name is: ${name}`);
  // End the program and close the readline interface
  rl.close();
});

// Listen to the close event
rl.on('close', () => {
  // Display a message and exit the program
  console.log('This important software is now closing\n');
  process.exit(0);
});
