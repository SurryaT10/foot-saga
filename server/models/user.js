const con = require('../db_connect');

async function createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS USER (
        user_id INT NOT NULL AUTO_INCREMENT,
        user_name VARCHAR(255) NOT NULL,
        user_email VARCHAR(255) NOT NULL,
        user_password VARCHAR(255) NOT NULL,
        PRIMARY KEY(user_id),
        UNIQUE user_name_idx(user_name),
        UNIQUE user_email_idx(user_email)
    );`;

    await con.query(sql);
}

const users = [
    {
        user_id: 1,
        user_name: 'LM10',
        user_email: 'leomessi10@goat.com'
    },
    {
        user_id: 2,
        user_name: 'CR7',
        user_email: 'cristiano7@secondbest.com'
    },
    {
        user_id: 3,
        user_name: 'Pele10',
        user_email: 'pele10@thirdbest.com'
    }
]

const getAllUsers = () => {
    return users;
}

createTable();

module.exports = { getAllUsers };