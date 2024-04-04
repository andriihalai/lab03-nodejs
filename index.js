const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/greet', (req, res) => {
  res.send('Greetings from Ukraine!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
