import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function AuthCallback() {
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    if (code) {
      // Send the code to the backend to exchange for the access token
      axios.get(`http://localhost:5000/auth/callback?code=${code}`)
        .then((response) => {
          setAccessToken(response.data.access_token);
        })
        .catch(() => {
          setError('Failed to get access token');
        });
    }
  }, [location.search]);
  return (
    <div>
      {accessToken ? (
        <div>Access Token: {accessToken}</div>
      ) : (
        <div>{error || 'Waiting for GitHub callback...'}</div>
      )}
    </div>
  );
}

export default AuthCallback;
