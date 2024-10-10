// components/CreateWebhook.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreateWebhook = () => {
  const [repoOwner, setRepoOwner] = useState('');
  const [repoName, setRepoName] = useState('');
  const [accessToken, setAccessToken] = useState(localStorage.getItem('githubAccessToken')); // You may store this token locally or use context.

  const handleWebhookCreation = async () => {
    try {
      const response = await axios.post('/webhook/create-webhook', {
        repoOwner,
        repoName,
        githubAccessToken: accessToken
      });

      if (response.status === 201) {
        alert('Webhook created successfully!');
      } else {
        alert('Failed to create webhook');
      }
    } catch (error) {
      console.error('Error creating webhook:', error);
      alert('Error creating webhook');
    }
  };

  return (
    <div className="container">
      <h2>Create Webhook</h2>
      <input
        type="text"
        placeholder="Repo Owner"
        value={repoOwner}
        onChange={(e) => setRepoOwner(e.target.value)}
      />
      <input
        type="text"
        placeholder="Repo Name"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
      />
      <button onClick={handleWebhookCreation}>Create Webhook</button>
    </div>
  );
};

export default CreateWebhook;
