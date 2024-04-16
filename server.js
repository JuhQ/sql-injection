const express = require('express');
const { findCatById_injection, findCatById } = require('./cat-model');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/data/:id', async (req, res) => {
  const result = await findCatById_injection(req.params.id)
  console.log("result", result)
  res.json(result)
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log(`http://localhost:3000`);
});