const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
let notes = require("./db/db.json");
const util = require("util");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 0004;

app.use(express.static("public"));

app.get("/api/notes", function (req, res) {
    res.json(notes);
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(_dirname, "/public/notes.html"));
});

app.get("/*", function (req, res) {
    res.sendFile(path.join(_dirname, "/public/index.html"));
});

app.post("/api/notes", function (req, res) {
    var newNotes = req.body;
    notes.push(newNotes);
    let storeNotes = JSON.stringify(notes);
    fs.writeFile(("./db/db.json"), storeNotes, function (err, data) {
        if (err) throw err;
    });
})

app.delete("/api/notes/:id", function (req, res) {
    let chosen = req.params.id;
    for (var i = 0; i < db.length; i++) {
        if (chosen === db[i].id);
    }
    return res.json(false);
});


app.get("/notes", function (req, res) {
    let notes = req.params.db;
    console.log(db);
})


app.listen(PORT, function () {
    console.log(`App is listening on PORT: ${PORT}`)
});
