/**
 * Event service
 *
 */
"use strict";

const mysql = require("promise-mysql");

let db;

/**
 * Main function.
 * @async
 * @returns void
 */
(async function () {
    db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        multipleStatements: true,
    });

    process.on("exit", () => {
        db.end();
    });
})();

module.exports = {
    /**
     * TODO: test the procedure works
     * Gets events by limit
     * @param {Number} limit the amount of events to get.
     * @returns
     */
    getEventsByLimit: async (limit) => {
        try {
            let sql = `CALL get_events_by_limit(?);`;

            let res = await db.query(sql, [limit]);

            return res[0];
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * Get all events
     * @returns {Object} data
     */
    getAllEvents: async () => {
        try {
            let sql = `CALL get_all_events();`;

            let res = await db.query(sql);

            return res[0];
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * Get event bby id
     * @param {Number} eventId
     * @returns {Object} data
     */
    getEventByEventId: async (eventId) => {
        let sql = `CALL get_one_event(?);`;

        let res = await db.query(sql, [eventId]);

        return res[0];
    },
    /**
     * TODO: test
     * Creates an event.
     * @param {Object} event
     */
    createEvent: async (event) => {
        try {
            let sql = `CALL create_event(?,?,?,?,?,?,?,?,?,?);`;

            await db.query(sql, [
                event.orgId,
                event.name,
                event.price,
                event.description,
                event.picture,
                event.startDate,
                event.endDate,
                event.location,
                event.published,
                event.visibility,
            ]);
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * TODO: test adding procedure
     * Update event
     * @param {*} event
     */
    updateEventById: async (event) => {
        try {
            let sql = `CALL update_event(?,?,?,?,?,?,?,?,?,?,?);`;

            await db.query(sql, [
                event.eventID,
                event.orgId,
                event.name,
                event.price,
                event.description,
                event.picture,
                event.startDate,
                event.endDate,
                event.location,
                event.published,
                event.visibility,
            ]);
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * TODO: test buying procedure and read up on swish api.
     * Buy event tickets
     * @param {Number} orgId
     * @param {Number} eventId
     * @param {Number} userId
     */
    buyEventTicket: async (orgId, eventId, userId) => {
        try {
            let sql = `CALL buy_ticket(?,?);`;

            await db.query(sql, [orgId, eventId, userId]);
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * TODO:
     * Mark event deleted.
     * @param {Number} eventId
     */
    deleteEvent: async (eventId) => {
        try {
            let sql = `CALL delete_event(?);`;

            await db.query(sql, [eventId]);
        } catch (error) {
            console.log(error);
        }
    },
};
