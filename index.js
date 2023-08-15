const express = require('express');
const app = express();

const port = 3003;

const path = require('path');

const pathName = path.join(__dirname, 'templates');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(`${pathName}/index.html`);
});

app.listen(port, () => {
  console.log('server rodando');
});
