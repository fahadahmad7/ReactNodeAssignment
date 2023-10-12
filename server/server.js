const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
