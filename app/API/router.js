var express = require("express");
var router = express.Router();
const multer = require('multer')
const os = require('os')
const {
  landingPage,
  detailPage,
  category,
  checkout,
  history,
  historyDetail,
  dashboard,
  profileDetail,
  updateProfile,
} = require("./controller");
const { isLoginPlayer } = require("../middleware/auth");

router.get("/landingpage", landingPage);
router.get("/:id/detail", detailPage);
router.get("/category", category);
router.post("/checkout", isLoginPlayer, checkout);
router.get("/history", isLoginPlayer, history);
router.get("/history/:id/detail", isLoginPlayer, historyDetail);
router.get("/dashboard", isLoginPlayer, dashboard);
router.get("/profile", isLoginPlayer, profileDetail);
router.put("/updateprofile", isLoginPlayer, 
  multer({ dest: os.tmpdir() }).single("image"),
  updateProfile
);

module.exports = router;
