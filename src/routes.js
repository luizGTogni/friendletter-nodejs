const express = require("express");
const mail = require("./app/controllers/mail");
const router = express.Router();

router.get("/", mail.index);
router.post("/", mail.send);

module.exports = router;