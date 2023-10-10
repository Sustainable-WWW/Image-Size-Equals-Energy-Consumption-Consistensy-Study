const port = 2500;
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/Images'));
app.set("view engine", "ejs")

// 3000-5000 tests
app.get("/3000-5000/image-1/avif", (req, res) => res.render("3000-5000/Image-1/image-test-avif"));
app.get("/3000-5000/image-1/webp", (req, res) => res.render("3000-5000/Image-1/image-test-webp"));
app.get("/3000-5000/image-1/gif", (req, res) => res.render("3000-5000/Image-1/image-test-gif"));
app.get("/3000-5000/image-1/png", (req, res) => res.render("3000-5000/Image-1/image-test-png"));
app.get("/3000-5000/image-1/jpg", (req, res) => res.render("3000-5000/Image-1/image-test-jpg"));

app.get("/3000-5000/image-2/avif", (req, res) => res.render("3000-5000/Image-2/image-test-avif"));
app.get("/3000-5000/image-2/webp", (req, res) => res.render("3000-5000/Image-2/image-test-webp"));
app.get("/3000-5000/image-2/gif", (req, res) => res.render("3000-5000/Image-2/image-test-gif"));
app.get("/3000-5000/image-2/png", (req, res) => res.render("3000-5000/Image-2/image-test-png"));
app.get("/3000-5000/image-2/jpg", (req, res) => res.render("3000-5000/Image-2/image-test-jpg"));

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