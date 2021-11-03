const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.listen(3010, () => console.log("listening to 3010"));
