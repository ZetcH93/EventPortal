/**
 * Events routes
 */
"use strict";

const router = require("express").Router();
const {
    getAllEvents,
    getEventByEventId,
    createEvent,
    updateEventById,
    buyEventTicket,
    deleteEvent,
} = require("./event.controller");

const { validateToken } = require("../../middlewares/middleware");

// List all events
router.get("/", validateToken, getAllEvents);

// List one event based on id
router.get("/:id", validateToken, getEventByEventId);

// Create event
router.post("/", validateToken, createEvent);

// TODO:
// Update event by event id
router.patch("/:id", validateToken, updateEventById);

// TODO:
// Buy event ticket
router.post("/:id", validateToken, buyEventTicket);

// TODO:
// Mark an event deleted.
router.delete("/:id", validateToken, deleteEvent);

module.exports = router;
