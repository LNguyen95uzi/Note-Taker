const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
let notes = require("./db/db.json");
// const util = require("util");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 0004;

app.use(express.static("public"));

app.get("/api/notes", function (req, res) {
    res.json(notes);
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post("/api/notes", function (req, res) {
    var newNotes = req.body;
    notes.push(req.body);
    req.body.id = notes.length;
    res.json(notes);
    fs.writeFile(("./db/db.json"), storeNotes, function (err, data) {
        if (err) throw err;
    });
})

app.delete("/api/notes/:id", function (req, res) {
    let chosen = parseInt(req.params.id);
    for (var i = 0; i < db.length; i++) {
        if (chosen === db[i].id) {
            notes.splice(i, 1);
        }
        for (let i = 0; i < notes.length; i++) {
            notes[i].id = 1 + i;
        }
    }
    fs.writeFile("./db/db.json", JSON.stringify(notes), function(err) {
        if(err) {
            throw err;
        }
    })
    return res.json(false);
});

app.listen(PORT, function () {
    console.log(`App is listening on PORT: ${PORT}`)
});

app.post("/api/notes", function (req, res) {
    let newNotes = req.body;
    res.json(newNotes);
});
