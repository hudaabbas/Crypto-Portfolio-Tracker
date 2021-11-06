import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 8080; // Choosing PORT

const Gecko_API_URL = "https://api.coingecko.com/api/v3/";

// Config use JSON parser
app.use(express.json());
//app.use(express.urlencoded({ extended: true })); //Might need if using URL encoded forms in frontend

// GET Request - Requires URL parameters (SPACE replaced with underscore)
// Returns information summarized by inference API
app.get('/coins/list', function(req, resp) {
  // This is for using the newsURL

  axios
    .get(news_url, news_options)
    .then(res => {

    //   console.log(news_q)

    //   console.log(res.data);
    })
    .catch(error => {
    console.error(error)
    })
});

// Start server at selected PORT
app.listen(port);
console.log('Server started at http://localhost:' + port);

