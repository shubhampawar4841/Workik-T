const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// Handle OAuth callback from GitHub
router.get('/callback', async (req, res) => {
  const code = req.query.code;
  
  if (!code) {
    return res.status(400).send('Authorization code not provided');
  }

  try {
    // Exchange authorization code for access token
    const response = await axios.post('https://github.com/login/oauth/access_token', null, {
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      },
      headers: {
        accept: 'application/json',
      },
    });

    const accessToken = response.data.access_token;
    if (accessToken) {
      // Optionally, store the access token in a session or database
      res.send(`Access token: ${accessToken}`);
    } else {
      res.status(400).send('Failed to get access token');
    }
  } catch (error) {
    res.status(500).send('Error exchanging code for token');
  }
});

module.exports = router;
