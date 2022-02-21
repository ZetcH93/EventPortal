/**
 * Events controller
 */
"use strict";
const {
    getAllEvents,
    getEventByEventId,
    createEvent,
    updateEventById,
} = require("./event.service");

module.exports = {
    /**
     * Gets all events.
     * @async
     * @param {Object} req request object.
     * @param {Object} res response object.
     */
    getAllEvents: async (req, res) => {
        let results = await getAllEvents();

        if (results) {
            return res.json({ success: 1, data: results });
        } else {
            return res.json({ success: 0, message: "No records found." });
        }
    },
    /**
     * Get event by event id.
     * @async
     * @param {Object} req request object.
     * @param {Object} res response object.
     */
    getEventByEventId: async (req, res) => {
        let results = await getEventByEventId(req.params.id);

        if (results.length != 0) {
            return res.json({ success: 1, data: results });
        } else {
            return res.json({
                success: 0,
                message: "No records found. Invalid event id",
            });
        }
    },
    /**
     * Create event.
     * @async
     * @param {Object} req request object.
     * @param {Object} res response object.
     */
    createEvent: async (req, res) => {
        const event = req.body;

        await createEvent(event);
        return res.json({ success: 1, message: "Event added successfully." });
    },
    /**
     * TODO: check the procedure works.
     * Update an event by event id.
     * @async
     * @param {Object} req request object.
     * @param {Object} res response object.
     */
    updateEventById: async (req, res) => {
        /* await updateEventById(event);
        return res.json({ success: 1, message: "Updated event successfully." }); */
    },
    /**
     * TODO: check the procedure works.
     * Buy event ticket
     * @async
     * @param {Object} req request object.
     * @param {Object} res response object.
     */
    buyEventTicket: async (req, res) => {},
    /**
     * TODO: check the procedure works.
     * Delete event.
     * @async
     * @param {Object} req request object.
     * @param {Object} res response object.
     */
    deleteEvent: async (req, res) => {},
};
