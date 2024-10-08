import React, { useEffect } from 'react';

const AuthCallback = () => {
  useEffect(() => {
    // Logic to retrieve the token from the URL and store it
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      // Store the token (you can use localStorage or context)
      localStorage.setItem('github_token', token);
      // Redirect to home or another page
      window.location.href = '/';
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-xl font-semibold">Loading...</h2>
    </div>
  );
};

export default AuthCallback;
