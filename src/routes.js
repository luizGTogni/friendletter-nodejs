const express = require("express");
const mail = require("./app/controllers/mail");
const router = express.Router();


router.get("/", (req, res) => {
  res.render("loading/index");
});

router.get("/letter", mail.index);
router.post("/send", mail.send);

module.exports = router;