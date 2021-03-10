const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

//app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/getContacts', (req, res) => {
  var contacts = ["Sam Youngs", "David Froman", "Jonathan Rivera"];
  res.json(contacts);
})

let protected = ['transformed.js', 'main.css', 'favicon.ico']

app.get("*", (req, res) => {

  let path = req.params['0'].substring(1)

  if (protected.includes(path)) {
    // Return the actual file
    res.sendFile(`${__dirname}/build/${path}`);
  } else {
    // Otherwise, redirect to /build/index.html
    res.sendFile(`${__dirname}/build/index.html`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})