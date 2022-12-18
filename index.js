const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
// app.use(express.static(__dirname + 'public'));

app.get('/',(req, res) => {
  res.sendFile(__dirname + '/sites/'+'/home/'+'/home.html', {
    headers: {
      'Content-Type': 'text/html'
    }
  });
});

app.get('/home',(req, res) => {
    res.sendFile(__dirname + '/sites/'+'/home/'+'/home.html', {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  });

  app.get('/portfolio/about-me',(req, res) => {
    res.sendFile(__dirname + '/sites/'+'/myInfo/'+'/myInfo.html', {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  });

  app.get('/portfolio/contact-me',(req, res) => {
    res.sendFile(__dirname + '/sites/'+'/contact/'+'/contact-me.html', {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  });

app.listen(3000);