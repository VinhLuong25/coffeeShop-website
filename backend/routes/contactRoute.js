const express = require("express");
const Contact = require("../models/contactForm");
const router = express.Router();

//get all info
router.get("/", (req, res) => {
  Contact.find()
    .then((infos) => res.json(infos))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add info
router.post("/add", (req, res) => {
  const newInfo = new Contact({
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
  });
  newInfo
    .save()
    .then(() => res.json("info added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
