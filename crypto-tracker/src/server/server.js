const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8080; // Choosing PORT

const Gecko_API_URL = "https://api.coingecko.com/api/v3/";

// Config use JSON parser
app.use(express.json());
//app.use(express.urlencoded({ extended: true })); //Might need if using URL encoded forms in frontend

app.get('/list', function(req, resp) {

  var url = Gecko_API_URL + '/coins/list'

  axios
    .get(url)
    .then(res => {

    console.log(resp)
    resp.send(res.data);

    })
    .catch(error => {
    console.error(error)
    })
});

app.get('/coin/:cid/', function(req, resp) {

  const cid = req.params["cid"];
  var url = Gecko_API_URL + `coins/${cid}/`;

  axios
    .get(url)
    .then(res => {

    resp.send(res.data);

    })
    .catch(error => {
    console.error(error)
    resp.send("No information")
    })
});

// Start server at selected PORT
app.listen(port);
console.log('Server started at http://localhost:' + port);
