# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  The `bug.js` file contains a simple HTTP server that performs an asynchronous operation. However, it lacks proper error handling for the promise, leading to an unhandled rejection if the asynchronous operation fails.

The `bugSolution.js` file provides a corrected version with proper error handling, showcasing how to prevent unhandled promise rejections and gracefully handle errors.

## How to Reproduce

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Refresh the page multiple times to trigger the error. Observe the error messages in your console.
5. Run `node bugSolution.js` to see the corrected version.