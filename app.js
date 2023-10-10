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

app.get("/3000-5000/image-3/avif", (req, res) => res.render("3000-5000/Image-3/image-test-avif"));
app.get("/3000-5000/image-3/webp", (req, res) => res.render("3000-5000/Image-3/image-test-webp"));
app.get("/3000-5000/image-3/gif", (req, res) => res.render("3000-5000/Image-3/image-test-gif"));
app.get("/3000-5000/image-3/png", (req, res) => res.render("3000-5000/Image-3/image-test-png"));
app.get("/3000-5000/image-3/jpg", (req, res) => res.render("3000-5000/Image-3/image-test-jpg"));

app.get("/3000-5000/image-4/avif", (req, res) => res.render("3000-5000/Image-4/image-test-avif"));
app.get("/3000-5000/image-4/webp", (req, res) => res.render("3000-5000/Image-4/image-test-webp"));
app.get("/3000-5000/image-4/gif", (req, res) => res.render("3000-5000/Image-4/image-test-gif"));
app.get("/3000-5000/image-4/png", (req, res) => res.render("3000-5000/Image-4/image-test-png"));
app.get("/3000-5000/image-4/jpg", (req, res) => res.render("3000-5000/Image-4/image-test-jpg"));

app.get("/3000-5000/image-5/avif", (req, res) => res.render("3000-5000/Image-5/image-test-avif"));
app.get("/3000-5000/image-5/webp", (req, res) => res.render("3000-5000/Image-5/image-test-webp"));
app.get("/3000-5000/image-5/gif", (req, res) => res.render("3000-5000/Image-5/image-test-gif"));
app.get("/3000-5000/image-5/png", (req, res) => res.render("3000-5000/Image-5/image-test-png"));
app.get("/3000-5000/image-5/jpg", (req, res) => res.render("3000-5000/Image-5/image-test-jpg"));

app.get("/3000-5000/image-6/avif", (req, res) => res.render("3000-5000/Image-6/image-test-avif"));
app.get("/3000-5000/image-6/webp", (req, res) => res.render("3000-5000/Image-6/image-test-webp"));
app.get("/3000-5000/image-6/gif", (req, res) => res.render("3000-5000/Image-6/image-test-gif"));
app.get("/3000-5000/image-6/png", (req, res) => res.render("3000-5000/Image-6/image-test-png"));
app.get("/3000-5000/image-6/jpg", (req, res) => res.render("3000-5000/Image-6/image-test-jpg"));

app.get("/3000-5000/image-7/avif", (req, res) => res.render("3000-5000/Image-7/image-test-avif"));
app.get("/3000-5000/image-7/webp", (req, res) => res.render("3000-5000/Image-7/image-test-webp"));
app.get("/3000-5000/image-7/gif", (req, res) => res.render("3000-5000/Image-7/image-test-gif"));
app.get("/3000-5000/image-7/png", (req, res) => res.render("3000-5000/Image-7/image-test-png"));
app.get("/3000-5000/image-7/jpg", (req, res) => res.render("3000-5000/Image-7/image-test-jpg"));

app.get("/3000-5000/image-8/avif", (req, res) => res.render("3000-5000/Image-8/image-test-avif"));
app.get("/3000-5000/image-8/webp", (req, res) => res.render("3000-5000/Image-8/image-test-webp"));
app.get("/3000-5000/image-8/gif", (req, res) => res.render("3000-5000/Image-8/image-test-gif"));
app.get("/3000-5000/image-8/png", (req, res) => res.render("3000-5000/Image-8/image-test-png"));
app.get("/3000-5000/image-8/jpg", (req, res) => res.render("3000-5000/Image-8/image-test-jpg"));

app.get("/3000-5000/image-9/avif", (req, res) => res.render("3000-5000/Image-9/image-test-avif"));
app.get("/3000-5000/image-9/webp", (req, res) => res.render("3000-5000/Image-9/image-test-webp"));
app.get("/3000-5000/image-9/gif", (req, res) => res.render("3000-5000/Image-9/image-test-gif"));
app.get("/3000-5000/image-9/png", (req, res) => res.render("3000-5000/Image-9/image-test-png"));
app.get("/3000-5000/image-9/jpg", (req, res) => res.render("3000-5000/Image-9/image-test-jpg"));

// 2000-3000 tests
app.get("/2000-3000/image-1/avif", (req, res) => res.render("2000-3000/Image-1/image-test-avif"));
app.get("/2000-3000/image-1/webp", (req, res) => res.render("2000-3000/Image-1/image-test-webp"));
app.get("/2000-3000/image-1/gif", (req, res) => res.render("2000-3000/Image-1/image-test-gif"));
app.get("/2000-3000/image-1/png", (req, res) => res.render("2000-3000/Image-1/image-test-png"));
app.get("/2000-3000/image-1/jpg", (req, res) => res.render("2000-3000/Image-1/image-test-jpg"));

app.get("/2000-3000/image-2/avif", (req, res) => res.render("2000-3000/Image-2/image-test-avif"));
app.get("/2000-3000/image-2/webp", (req, res) => res.render("2000-3000/Image-2/image-test-webp"));
app.get("/2000-3000/image-2/gif", (req, res) => res.render("2000-3000/Image-2/image-test-gif"));
app.get("/2000-3000/image-2/png", (req, res) => res.render("2000-3000/Image-2/image-test-png"));
app.get("/2000-3000/image-2/jpg", (req, res) => res.render("2000-3000/Image-2/image-test-jpg"));

app.get("/2000-3000/image-3/avif", (req, res) => res.render("2000-3000/Image-3/image-test-avif"));
app.get("/2000-3000/image-3/webp", (req, res) => res.render("2000-3000/Image-3/image-test-webp"));
app.get("/2000-3000/image-3/gif", (req, res) => res.render("2000-3000/Image-3/image-test-gif"));
app.get("/2000-3000/image-3/png", (req, res) => res.render("2000-3000/Image-3/image-test-png"));
app.get("/2000-3000/image-3/jpg", (req, res) => res.render("2000-3000/Image-3/image-test-jpg"));

app.get("/2000-3000/image-4/avif", (req, res) => res.render("2000-3000/Image-4/image-test-avif"));
app.get("/2000-3000/image-4/webp", (req, res) => res.render("2000-3000/Image-4/image-test-webp"));
app.get("/2000-3000/image-4/gif", (req, res) => res.render("2000-3000/Image-4/image-test-gif"));
app.get("/2000-3000/image-4/png", (req, res) => res.render("2000-3000/Image-4/image-test-png"));
app.get("/2000-3000/image-4/jpg", (req, res) => res.render("2000-3000/Image-4/image-test-jpg"));

app.get("/2000-3000/image-5/avif", (req, res) => res.render("2000-3000/Image-5/image-test-avif"));
app.get("/2000-3000/image-5/webp", (req, res) => res.render("2000-3000/Image-5/image-test-webp"));
app.get("/2000-3000/image-5/gif", (req, res) => res.render("2000-3000/Image-5/image-test-gif"));
app.get("/2000-3000/image-5/png", (req, res) => res.render("2000-3000/Image-5/image-test-png"));
app.get("/2000-3000/image-5/jpg", (req, res) => res.render("2000-3000/Image-5/image-test-jpg"));

app.get("/2000-3000/image-6/avif", (req, res) => res.render("2000-3000/Image-6/image-test-avif"));
app.get("/2000-3000/image-6/webp", (req, res) => res.render("2000-3000/Image-6/image-test-webp"));
app.get("/2000-3000/image-6/gif", (req, res) => res.render("2000-3000/Image-6/image-test-gif"));
app.get("/2000-3000/image-6/png", (req, res) => res.render("2000-3000/Image-6/image-test-png"));
app.get("/2000-3000/image-6/jpg", (req, res) => res.render("2000-3000/Image-6/image-test-jpg"));

app.get("/2000-3000/image-7/avif", (req, res) => res.render("2000-3000/Image-7/image-test-avif"));
app.get("/2000-3000/image-7/webp", (req, res) => res.render("2000-3000/Image-7/image-test-webp"));
app.get("/2000-3000/image-7/gif", (req, res) => res.render("2000-3000/Image-7/image-test-gif"));
app.get("/2000-3000/image-7/png", (req, res) => res.render("2000-3000/Image-7/image-test-png"));
app.get("/2000-3000/image-7/jpg", (req, res) => res.render("2000-3000/Image-7/image-test-jpg"));

app.get("/2000-3000/image-8/avif", (req, res) => res.render("2000-3000/Image-8/image-test-avif"));
app.get("/2000-3000/image-8/webp", (req, res) => res.render("2000-3000/Image-8/image-test-webp"));
app.get("/2000-3000/image-8/gif", (req, res) => res.render("2000-3000/Image-8/image-test-gif"));
app.get("/2000-3000/image-8/png", (req, res) => res.render("2000-3000/Image-8/image-test-png"));
app.get("/2000-3000/image-8/jpg", (req, res) => res.render("2000-3000/Image-8/image-test-jpg"));

app.get("/2000-3000/image-9/avif", (req, res) => res.render("2000-3000/Image-9/image-test-avif"));
app.get("/2000-3000/image-9/webp", (req, res) => res.render("2000-3000/Image-9/image-test-webp"));
app.get("/2000-3000/image-9/gif", (req, res) => res.render("2000-3000/Image-9/image-test-gif"));
app.get("/2000-3000/image-9/png", (req, res) => res.render("2000-3000/Image-9/image-test-png"));
app.get("/2000-3000/image-9/jpg", (req, res) => res.render("2000-3000/Image-9/image-test-jpg"));

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