const router = require('express').Router();
// Auth Controller
const authCtrl = require('../controller/auth');
// Routes/ Call API's
router.get("/sign-up", authCtrl.auth_signup_get)
router.post("/sign-up", authCtrl.auth_signup_post);
module.exports = router;






