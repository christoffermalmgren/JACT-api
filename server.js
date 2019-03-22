const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const api = require("./routes/api");

const PORT = 8080;
const app = express();
const server = http.createServer(app);

app.use(cors());

//API file for interacting with MongoDB

//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Angular  Dist output folder
// app.use(express.static(path.join(__dirname + "dist")));

//API location
app.use("/", api);

//set the PORT

server.listen(PORT, () => console.log("server running on localhost" + PORT));
