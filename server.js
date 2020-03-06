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


