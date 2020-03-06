const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
let notes = require("./db/db.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 0004;

app.use(express.static("public"));

app.get("/api/notes", function(req, res){
    res.json(notes);
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(_dirname, "public/notes.html"));
});

app.get("/*", function(req, res) {
    res.sendFile(path.join(_dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
    let notes = req.params.db;
    console.log(db);
})
