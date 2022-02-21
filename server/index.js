/**
 * EventPortal Server
 */
"use strict";

// load development environment varaibles
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

// dependencies
const express = require("express");
const cors = require("cors");

// init app
const app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 1337;

// web routes
const registerRoute = require("./api/register/register.router");
const loginRoute = require("./api/login/login.router");
const organizationRoute = require("./api/organization/organization.router");

const eventRoute = require("./api/event/event.router");
/* const news = require("./api/news/news.route"); */
const membersRoute = require("./api/members/members.router");
/* const permissions = require("./api/permissions/permissions.router"); */
/* const roles = require("./api/roles/roles.router"); */

// init web routes
app.use("/api/register", registerRoute);
app.use("/api/login/", loginRoute);
app.use("/api/organization/", organizationRoute);
app.use("/api/members/", membersRoute);
app.use("/api/event/", eventRoute);

/* TODO: */
/* app.use("/api/news", news); */
/* TODO: */
/* app.use("/api/permissions", permissions); */
/* TODO: */
/* app.use("/api/roles", roles); */

app.listen(port, () =>
    console.log(`Server started on: http://localhost:${port}`)
);
