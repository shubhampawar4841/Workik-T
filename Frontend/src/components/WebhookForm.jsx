import React, { useState } from 'react';

const WebhookForm = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to create a webhook using the stored token
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Create a Webhook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="webhookUrl" className="block mb-2">Webhook URL:</label>
          <input
            type="text"
            id="webhookUrl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Create Webhook
        </button>
      </form>
    </div>
  );
};

export default WebhookForm;
