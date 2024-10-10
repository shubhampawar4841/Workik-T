// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GitHubOAuth from './components/GitHubOAuth';
import CreateWebhook from './components/CreateWebhook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GitHubOAuth />} />
        <Route path="/create-webhook" element={<CreateWebhook />} />
      </Routes>
    </Router>
  );
}

export default App;
