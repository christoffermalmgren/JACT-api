const express = require("express");
const router = express.Router();
const Admins = require("../models/Admins");
const mongoose = require("mongoose");
var cors = require("cors");

//du kan göra lokalt på denna el connecta till mongoDb atlas länk
//el kan du koppla via studio t3 till mongoDb atlas
const dbUri = "mongodb://localhost:27017/JACT";

var corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200
};

mongoose.connect(dbUri, { useNewUrlParser: true }, err => {
  console.log(err ? "error: " + err : "connected to mongo");
});

router.get("/catchUon", (req, res) => {
  res.send("the flip side");
});

router.get("/admin", cors(corsOptions), (req, res) => {
  Admins.find({}, (err, admins) => {
    if (err) {
      res.send(err);
      next();
    }

    res.json(admins);
  });
});

router.post("/admin", (req, res) => {
  Admins.create(
    { firstname: req.body.firstname, password: req.body.password },
    (err, admin) => {
      if (err) {
        res.send(err);
        next();
      }
      res.json(admin);
    }
  );
});

router.patch("/admin", (req, res) => {
  Admins.findByIdAndUpdate(
    req.body._id,
    {
      firstname: req.body.firstname,
      password: req.body.password
    },
    (err, admin) => {
      if (err) {
        res.send(err);
        next();
      }
      console.log(admin);
      res.json(admin);
    }
  );
});

module.exports = router;
