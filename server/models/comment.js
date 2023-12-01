const con = require('../db_connect');

async function createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS COMMENT (
        comment_id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        article_id INT NOT NULL,
        comment_title VARCHAR(255) NOT NULL,
        comment_description VARCHAR(255) NOT NULL,
        PRIMARY KEY(comment_id),
        FOREIGN KEY(user_id) REFERENCES USER(user_id),
        FOREIGN KEY(article_id) REFERENCES ARTICLE(article_id)
    );`;

    await con.query(sql);
}

createTable();