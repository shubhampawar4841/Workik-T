import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// OAuth callback handling
export const getAuthToken = (code) => {
  return api.post('/auth/github', { code });
};

// Other API endpoints for token, PR review, etc.
