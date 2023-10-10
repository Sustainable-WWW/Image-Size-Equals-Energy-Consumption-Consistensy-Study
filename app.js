const port = 2500;
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const serveStatic = require('serve-static');
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/Images'));
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("3000-5000/Image-1/image-test-avif");
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
});

app.listen(port, () => 
    console.log(`Image test is running`)
);