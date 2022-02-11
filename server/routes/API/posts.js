const express = require("express");
const router = express.Router();

const DBManager = require("../../src/dbmanager.js")

module.exports = router;

sitename = "Eventportalen "

router.get('/', (req, res) => {
    title = `${sitename} | Start`

    data.events = await DBManager.getEvents();

    res.send("Hello", data);
});
