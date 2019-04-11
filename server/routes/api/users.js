const express = require("express");
const router = express.Router();

// request data modal
var userModal = require("../../modals/user");

// @route   GET api/users/test
// @desc    Tests user routes
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "test user works fine!" }));

// @route   POST api/users/register
// @desc    register user
// @access  Public
router.get("/register", (req, res) => {
  userModal.findByEmail(req.query.mail, function(err, rows) {
    if (rows !== undefined && rows.length > 0) {
      return res
        .status(400)
        .json({ email: `email "${req.body.email}" already exist` });
    } else {
      const newUser = userModal.create(
        req.query,
        function(err, insertId) {
          res.json({ msg: `Succeed! user added with id# ${insertId}` });
        }
      );
    }
  });
});

module.exports = router;
