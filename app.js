var express = require('express')
  , app = express()
  fs = require("fs");

app.use(express.static(__dirname + '/public'))

require('./routes.js');

var artfile = './public/data/art.json';
var dancefile = './public/data/dance.json';
var musicfile = './public/data/music.json';
var theatrefile = './public/data/theatre.json';

var artObj = '';
var danceObj = '';
var musicObj = '';
var theatreObj = '';

fs.readFile(artfile, 'utf8', function(err, data){
  if (err) {
    console.log('Error: ', err);
  } else {
    artObj = JSON.parse(data);
  }
});

fs.readFile(dancefile, 'utf8', function(err, data){
  if (err) {
    console.log('Error: ', err);
  } else {
    danceObj = JSON.parse(data);
  }
});

fs.readFile(musicfile, 'utf8', function(err, data){
  if (err) {
    console.log('Error: ', err);
  } else {
    musicObj = JSON.parse(data);
  }
});

fs.readFile(theatrefile, 'utf8', function(err, data){
  if (err) {
    console.log('Error: ', err);
  } else {
    theatreObj = JSON.parse(data);
    // console.log('theatreObj', theatreObj);
  }
});

console.log('here **********************************************');
// app.listen(3000, function() {
//   console.log('Listening on port 3000...')
// })
