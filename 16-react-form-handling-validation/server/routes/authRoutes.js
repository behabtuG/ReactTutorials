const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/auth");
const validate = require("../middleware/validate");

router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  validate,
  authController.register
);

router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  validate,
  authController.login
);

module.exports = router;
