/**
 * Login route
 */

"use strict";

const router = require("express").Router();
const { login } = require("./login.controller");

// login
router.post("/", login);

module.exports = router;
