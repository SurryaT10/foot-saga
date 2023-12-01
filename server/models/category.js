const con = require('../db_connect');

async function createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS CATEGORY (
        category_id INT NOT NULL AUTO_INCREMENT,
        category_name VARCHAR(255) NOT NULL,
        PRIMARY KEY(category_id)
    );`;

    await con.query(sql);
}

createTable();