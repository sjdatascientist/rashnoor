const path = require("path");
const express = require("express");

app = express();

app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/services', (req, res) => {
    res.render('services');
})

app.get('/aboutus', (req, res) => {
    res.render('aboutus');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
