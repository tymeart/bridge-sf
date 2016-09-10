var fs = require("fs");

fs.readFile('data/art.json', 'utf8', function(err, data){
  if (err) {
    console.log('Error: ', err);
  }
  console.log(data);
});
