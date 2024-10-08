const express = require('express');
const router = express.Router();

// Handler for incoming GitHub Webhook events
router.post('/webhook', (req, res) => {
  const event = req.headers['x-github-event'];

  if (event === 'pull_request') {
    const prData = req.body.pull_request;

    // Do something with the pull request data, like trigger the AI review here
    console.log('New PR Created: ', prData);
    
    // You can trigger the next step: AI review here
  }

  res.status(200).send('Webhook received successfully');
});

module.exports = router;
