/**
 * News router
 */
"use strict";

const router = require("express").Router();

const {
    getAllNews,
    getNewsById,
    createNews,
    updateNews,
} = require("./news.controller");
const { validateToken } = require("../../middlewares/middleware");

// Get all news
router.get("/", validateToken, getAllNews);

// Get news by news id.
router.get("/:id", validateToken, getNewsById);

// Add news
router.post("/", validateToken, createNews);

// Update news
router.patch("/", validateToken, updateNews);
