const User = require("../models/user")
const bcrypt = require("bcrypt")

exports.auth_signup_get = async (req, res) => {
  res.render("auth/sign-up.ejs")
}

exports.auth_signup_post = async (req, res) => {
  const userInDatabase = await User.findOne({ username: req.body.username});
  if(userInDatabase){
    return res.send("Username already taken");
  }
  if(req.body.password !== req.body.confirmPassword){
    return res.send("Password and confirm password must match")
  }
  // Register the User
  // Password Encryption
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;
  // Create the User
  const user = await User.create(req.body);
  res.send(`Thanks for signing up ${user.username}`)
}
