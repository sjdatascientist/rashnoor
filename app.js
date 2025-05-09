const path = require("path");
const favicon = require('serve-favicon');
const express = require("express");

app = express();

app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// Serve favicon
app.use(favicon(path.join(__dirname, 'public', 'assets/media/favicon.png')));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/weddings', (req, res) => {
    res.render('weddings');
})

app.get('/events', (req, res) => {
    res.render('events');
})

app.get('/services', (req, res) => {
    res.render('services');
})

app.get('/aboutus', (req, res) => {
    res.render('aboutus');
})

app.get('/contactus', (req, res) => {
    res.render('contactus');
})

app.get('/photogallery', (req, res) => {
    res.render('photogallery');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
