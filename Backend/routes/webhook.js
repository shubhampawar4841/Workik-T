// routes/webhook.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/create-webhook', async (req, res) => {
  console.log('Request Body:', req.body); // Log the request body
  const { repoOwner, repoName, githubAccessToken } = req.body;

  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/hook`;
  console.log(url);
  

  try {
    const response = await axios.post(url, {
      config: {
        url: 'http://https://your-subdomain.loca.lt.ngrok.io/webhook', // Your ngrok URL
        content_type: 'json'
      },
      events: ['pull_request'],
      active: true
    }, {
      headers: {
        Authorization: `token ${githubAccessToken}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });

    res.status(201).json({ message: 'Webhook created successfully', data: response });
  } catch (error) {
    console.error('Error creating webhook:', error);
    res.status(400).json({ message: 'Failed to create webhook', error: error.response.data });
  }
});


module.exports = router;
