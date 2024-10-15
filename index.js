const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

const NEWS_API_KEY = '22854d4a04094016988cf62fbdb98068';

app.get('/news', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=health&apiKey=${NEWS_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from NewsAPI' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
