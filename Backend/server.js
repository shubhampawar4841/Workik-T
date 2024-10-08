// server.js
const express = require('express');
const authRoutes = require('./routes/auth');
const webhookRoutes = require('./routes/webhook'); // Import the webhook routes
const webhandler=require('./routes/webhookHandler')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(express.json());

// Use auth routes
app.use('/auth', authRoutes);
app.use('/webhook', webhookRoutes); // Add webhook routes here
app.use('/webhookhandler',webhandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
