var express = require('express');
var fs = require("fs");

var app = express();

app.get('/', function (req, res) {
   fs.readFile( "./states.json", 'utf8', function (err, data) {
       res.end( data );
   });
})

app.get('/:state', function (req, res) {
  fs.readFile( "./states.json", 'utf8', function (err, data) {
      // console.log('----------------',req.params);
      var data= JSON.parse(data);
      data.find(item =>{
        if(item.state == req.params.state){
          res.end(JSON.stringify(item.border))
        }});
  });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
