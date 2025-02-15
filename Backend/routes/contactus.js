const express = require("express");
const router = express.Router();
const  sendMessage = require("../controllers/contactus");
router.post("/send-message", sendMessage);
module.exports = router;
