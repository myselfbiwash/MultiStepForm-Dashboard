const User = require('../models/userData');

exports.postUserData = async (req, res) => {
  try {
    const user = new User(req.body);
    console.log("🚀 ~ exports.postUserData= ~ req.body:", req.body)
    console.log("🚀 ~ file: user.js ~ line 7 ~ exports.postUserData= ~ user", user);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};