"use strict";

var express = require('express');

var app = express();

var path = require('path');

var bodyParser = require('body-parser');

var queries = require('../database/queries');

app.use(express["static"](path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/products', function (req, res) {
  queries.getProducts(function (error, result) {
    if (error) {
      console.error('error at endpoint with getting products', error);
    } else {
      res.send(result);
    }
  });
});
var port = process.env.PORT || 8081;
app.listen(port, function () {
  console.log("Listening on port ".concat(port));
}); // only used when seeding the database
// app.get('/seed', (request, response) => {
//     data.data.forEach((item) => {
//         console.log(item)
//         queries.seedDatabase(item.customerReviewCount, item.image, item.name, item.regularPrice, item.thumbnailImage, (error, result) => {
//             if (error) {
//                 console.error(error);
//             } else {
//                 response.end();
//             }
//         })
//     })
// })
