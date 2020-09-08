const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, name } = req.body;

    //validation
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields need to be entered" });
    }
    if (password.length < 5) {
      return res
        .status(400)
        .json({ msg: "password needs to be 5 character long" });
    }
    if (password !== passwordCheck)
      return res.status(400).json({ msg: "password is not matched" });

    const existUser = await User.findOne({ email: email });
    if (existUser) return res.status(400).json({ msg: "user already existed" });
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      name,
    });
    newUser.save().then((data) => res.json(data));
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "All fields need to be filled" });
  }
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ msg: "user does not exist" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "invalid credential" });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token, user: { id: user._id, name: user.name } });
});

router.delete("/delete", auth, async (req, res) => {
  const deletedUser = User.findByIdAndDelete(req.user);
  req.json(deletedUser);
});
router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verified);
    if (!verified) return res.json(false);
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    res.json(true);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});
//get a user
router.get("/", auth, async (req, res) => {
  try {
    const newUser = await User.findById(req.user);
    res.json({ id: newUser._id, name: newUser.name });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
