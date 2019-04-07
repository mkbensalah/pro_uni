const express = require("express");
const router = express.Router();

// @route   GET api/profiles/test
// @desc    Tests profile routes
// @access  Private
router.get("/test", (req, res) =>
  res.json({ msg: "test profile works fine!" })
);

module.exports = router;
