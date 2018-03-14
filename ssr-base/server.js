const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

// Client-Side Bundle File
const clientBundleFilePath = path.join(__dirname, './dist/bundle.client.js');
const clientBundleFileUrl = '/bundle.client.js';


// Server-Side Rendering
app.get('/', function (req, res) {
    const clientBundleFileCode = fs.readFileSync(path.join(__dirname, './dist/index.html'), 'utf8');
    res.send(clientBundleFileCode);
      
  });

  // Client-Side Bundle File
app.get(clientBundleFileUrl, function (req, res) {
    const clientBundleFileCode = fs.readFileSync(clientBundleFilePath, 'utf8');
    res.send(clientBundleFileCode);
  });

  // Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});