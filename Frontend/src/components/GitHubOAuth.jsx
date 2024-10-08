import React from 'react';

const GitHubOAuth = () => {
  const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_GITHUB_REDIRECT_URI;

  const handleClick = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.open(githubAuthUrl, '_self');
  };

  return (
    <div>
      <button onClick={handleClick}>Connect to GitHub</button>
    </div>
  );
};

export default GitHubOAuth;
