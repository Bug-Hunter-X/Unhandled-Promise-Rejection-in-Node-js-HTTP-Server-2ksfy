const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    // Error handling is missing here, leading to unhandled promise rejection
    console.error('Error:', error); //This will be printed to the console but not handled properly
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that might lead to an error
    const randomValue = Math.random();
    if (randomValue < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});