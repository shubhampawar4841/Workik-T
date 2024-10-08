// src/components/GitHubAuth.js
import React from "react";

const GitHubAuth = () => {
  const clientId = "Ov23liBv2o0FNvVrYESP";
  const redirectUri = "http://localhost:3000/callback";

  const handleGitHubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo`;
  };

  return (
    <div>
      <h1>Connect GitHub to PR Review System</h1>
      <button onClick={handleGitHubLogin}>Connect GitHub</button>
    </div>
  );
};

export default GitHubAuth;
