const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'))
app.use(cors());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'))
})

app.get("/url", (req, res) => {
    res.sendFile(path.join(__dirname + '/url.html'))
})

app.listen(PORT);
