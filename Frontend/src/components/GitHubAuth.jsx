import React, { useState } from 'react';
import axios from 'axios';

const GitHubAuth = () => {
  const [accessToken, setAccessToken] = useState('');
  const [repoOwner, setRepoOwner] = useState('');
  const [repoName, setRepoName] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    // Redirect user to GitHub OAuth login page
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=repo`;
  };

  const handleCreateWebhook = async () => {
    const token = localStorage.getItem('githubAccessToken');
    
    if (!token) {
      alert('You must log in first!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/create-webhook', {
        repoOwner,
        repoName,
        githubAccessToken: token,
      });
      setMessage(`Webhook created successfully: ${response.data.message}`);
    } catch (error) {
      console.error('Error creating webhook:', error);
      setMessage(`Error creating webhook: ${error.response?.data?.message || 'Unknown error'}`);
    }
  };

  const handleFetchUserInfo = async () => {
    const token = localStorage.getItem('githubAccessToken');

    if (!token) {
      alert('You must log in first!');
      return;
    }

    try {
      const response = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });
      alert(`Logged in as: ${response.data.login}`);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  return (
    <div>
      <h1>GitHub Authentication</h1>
      <button onClick={handleLogin}>Log in with GitHub</button>
      <br />
      <input
        type="text"
        placeholder="Repository Owner"
        value={repoOwner}
        onChange={(e) => setRepoOwner(e.target.value)}
      />
      <input
        type="text"
        placeholder="Repository Name"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
      />
      <button onClick={handleCreateWebhook}>Create Webhook</button>
      <button onClick={handleFetchUserInfo}>Fetch User Info</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default GitHubAuth;
