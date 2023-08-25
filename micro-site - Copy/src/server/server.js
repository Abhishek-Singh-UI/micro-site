const express = require('express');
const app = express()
const bodyParser = require("body-parser");
const { response } = require("express");
var jsonParser = bodyParser.json();
var catchdata;
let port = 3000;
const prettier = require("prettier");

//to avoid xmlhttprequest at blocked by cors
const cors = require("cors");
app.use(cors());
app.post('/posting', jsonParser, (req, res) => {
// req.body holds the object which is sent from front end
   
let data = JSON.stringify(req.body);
module.exports.data = data;
    res.json(data)
  catchdata = data;
return req;
})

// send data to pdp.html
app.get('/pdp', jsonParser, (request, response) => {
  // req.body holds the object which is sent from front end
let data = JSON.stringify(request.body);
module.exports.data = data;
  let recieveddata = JSON.parse(catchdata)
  response.send(recieveddata.pid)
return request;
})

//Listen On Server
app.listen(port, function (err) {
    console.log(`Server Started At Port ${port}`);
});


