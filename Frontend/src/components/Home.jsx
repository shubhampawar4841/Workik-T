import React from 'react';

const Home = () => {
  const handleGitHubAuth = () => {
    // Your GitHub OAuth authorization logic goes here
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/callback`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-semibold mb-4">Welcome to the PR Review App!</h2>
      <button
        onClick={handleGitHubAuth}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Connect with GitHub
      </button>
    </div>
  );
};

export default Home;
