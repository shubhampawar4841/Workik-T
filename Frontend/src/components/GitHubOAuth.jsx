// components/GitHubOAuth.jsx (modified)
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GitHubOAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Exchange authorization code for access token
      axios
        .get(`/auth/callback?code=${code}`)
        .then((response) => {
          const accessToken = response.data.accessToken;
          if (accessToken) {
            localStorage.setItem('githubAccessToken', accessToken);
            navigate('/create-webhook'); // Redirect to webhook creation page
          }
        })
        .catch((error) => console.error('Error during OAuth:', error));
    }
  }, [navigate]);

  const handleGitHubLogin = () => {
    const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo`;

    window.location.href = githubAuthUrl;
  };

  return (
    <div className="container">
      <h1>Automatic GitHub PR Review System</h1>
      <button onClick={handleGitHubLogin}>Connect GitHub</button>
    </div>
  );
};

export default GitHubOAuth;
