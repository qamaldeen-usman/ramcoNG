const functions = require('firebase-functions');

// We'll keep the loaded app in a variable
let ssrApp = null;

exports.ssr = functions.https.onRequest(async (req, res) => {
  // If the app hasn't loaded yet, load it dynamically (this handles .mjs correctly)
  if (!ssrApp) {
    try {
      const { reqHandler } = await import('../dist/gadgettemplate/server/server.mjs');
      ssrApp = reqHandler;
    } catch (err) {
      console.error('Failed to load SSR server:', err);
      res.status(500).send('SSR Server error');
      return;
    }
  }
  // Run the request handler
  ssrApp(req, res);
});
