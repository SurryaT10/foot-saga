require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME
});

const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
        con.query(sql, binding, (err, result) => {
            if (err) {
                console.log("ERROR " + err);
                reject()
            };
            resolve(result);
        })
    })
};

module.exports = { con, query };