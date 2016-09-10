var express = require('express')
  , app = express()
  fs = require("fs");

app.use(express.static(__dirname + '/public'))

var artfile = '/public/data/art.json';
console.log('********** artfile *********************', artfile);

fs.readFile(artfile, 'utf8', function(err, data){
  if (err) {
    console.log('Error: ', err);
  }
  console.log(data);
});


app.listen(3000, function() {
  console.log('Listening on port 3000...')
})
