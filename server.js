const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

const contacts = [
  {
    'name': 'Sam Youngs',
    'email': 'youngs3@pdx.edu',
    'github': 'SamYoungs'
  },
  {
    'name': 'David Froman',
    'email': 'dfroman@pdx.edu',
    'github': 'ReallyNotThatGuy'
  },
  {
    'name': 'Jonathan Rivera',
    'email': 'rivera26@pdx.edu',
    'github': 'rivera26'
  }
];

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/getContacts', (req, res) => {
  res.json(contacts);
})

app.get('*', (req, res) => {
  let url = path.join(__dirname, '/frontend/build/index.html');
  res.sendFile(url);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})