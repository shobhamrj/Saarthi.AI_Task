const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb://localhost/result", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
const resultSchema = mongoose.Schema({
    user: String,
    url: String
})
const result = mongoose.model("result", resultSchema)
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/login.html'))
})

app.get("/url", (req, res) => {
    res.sendFile(path.join(__dirname + '/url.html'))
})
app.post("/url", (req, res) =>{
    console.log(req.body)
    result.create({
        user: req.body.user,
        url: req.body.url
    }).then((err, result) => {
        if(err)
            console.log(err)
        else
            console.log(result)
    })
})


app.listen(PORT);
