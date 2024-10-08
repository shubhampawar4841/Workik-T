import React from 'react';

function App() {
  const handleLogin = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID; // Use environment variables in Vite
    const redirectUri = 'http://localhost:5000/auth/callback'; // Same as GitHub OAuth redirect URI
    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    
    // Redirect to GitHub for OAuth
    window.location.href = githubUrl;
  };

  return (
    <div className="App">
      <h1>Login with GitHub</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
