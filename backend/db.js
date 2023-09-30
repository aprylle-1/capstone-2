"use strict"

/**
 * Contains db configuration
 */

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

db = new Client({
  connectionString: "postgresql:///capstone_2_backend"
});

// if (process.env.NODE_ENV === "production") {
//     db = new Client({
//       connectionString: getDatabaseUri(),
//       ssl: {
//         rejectUnauthorized: false
//       }
//     });
//   } else {
//     db = new Client({
//       connectionString: getDatabaseUri()
//     });
// }
  
db.connect();
  
module.exports = db;