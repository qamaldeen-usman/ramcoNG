const functions = require('firebase-functions');
// Import the reqHandler from your built server file
const { reqHandler } = require('../dist/gadgettemplate/server/server.mjs');

// Export the function named 'ssr'
exports.ssr = functions.https.onRequest(reqHandler);
