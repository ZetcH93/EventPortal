/**
 * News controller
 */
"use strict";
const {
    getAllNews,
    getNewsById,
    createNews,
    updateNews,
} = require("./news.service");

module.exports = {
    /**
     * TODO:
     * Get all news.
     * @async
     * @param {Object} req Request Object.
     * @param {Object} res Response object.
     */
    getAllNews: async (req, res) => {},
    /**
     * TODO:
     * Get one news by news id
     * @async
     * @param {Object} req Request Object.
     * @param {Object} res Response object.
     */
    getNewsById: async (req, res) => {},
    /**
     * TODO:
     * Add news.
     * @async
     * @param {Object} req Request Object.
     * @param {Object} res Response object.
     */
    createNews: async (req, res) => {},
    /**
     * TODO:
     * Update News
     * @async
     * @param {Object} req Request Object.
     * @param {Object} res Response object.
     */
    updateNews: async (req, res) => {},
    /**
     * TODO:
     * Mark one News deleted
     * @async
     * @param {Object} req Request Object.
     * @param {Object} res Response object.
     */
    deleteNews: async (req, res) => {},
};
