/**
 * Register route
 */
"use strict";

const router = require("express").Router();
const { registerAccount } = require("./register.controller");

router.post("/", registerAccount);

module.exports = router;
