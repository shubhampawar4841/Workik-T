const axios = require('axios');

async function reviewPR(prData) {
  // Here we can use an AI model, for example, OpenAI's API
  const review = await axios.post('https://api.openai.com/v1/completions', {
    prompt: `Review the following PR: ${prData.title} \n\n ${prData.body}`,
    model: 'text-davinci-003',
    max_tokens: 100,
  });

  return review.data.choices[0].text;
}

module.exports = { reviewPR };
