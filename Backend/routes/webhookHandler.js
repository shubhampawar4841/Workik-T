const express = require('express');
const router = express.Router();

// Handler for incoming GitHub Webhook events
// Add this to your existing server code
router.post('/webhook', (req, res) => {
  const event = req.headers['x-github-event']; // Type of event (e.g., 'pull_request')
  const payload = req.body; // The webhook payload
  
  console.log(`Received GitHub event: ${event}`);
  console.log('Payload:', payload);

  // Handle specific events like 'pull_request'
  if (event === 'pull_request') {
    const action = payload.action;
    const pullRequest = payload.pull_request;

    console.log(`Pull request action: ${action}`);
    console.log(`Pull request title: ${pullRequest.title}`);
    console.log(`Pull request URL: ${pullRequest.html_url}`);
    
    // Do something with the pull request data...
  }

  res.status(200).send('Webhook received successfully');
});

module.exports = router;
