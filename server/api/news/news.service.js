/**
 * News service
 */
"use strict";

module.exports = {
    getAllNews: async () => {
        try {
            let sql = `CALL get_all_news();`;

            let res = await db.query(sql);

            return res[0];
        } catch (error) {
            throw new Error(error);
        }
    },
    getNewsById: async () => {
        try {
            let sql = `CALL get_one_news(?);`;

            let res = await db.query(sql, [id]);

            return res[0];
        } catch (error) {
            throw new Error(error);
        }
    },
    createNews: async () => {},
    updateNews: async () => {},
};
