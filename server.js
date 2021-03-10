const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/getContacts', (req, res) => {
  var contacts = ["Sam Youngs", "David Froman", "Jonathan Rivera"];
  res.json(contacts);
})

app.get('/*', (req, res) => {
  let url = path.join(__dirname, '../frontend/build', 'index.html');
  if (!url.startsWith('/components/'))
    url = url.substring(1);
  res.sendFile(url);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})