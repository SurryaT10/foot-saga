const con = require('../db_connect');

async function createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS ARTICLE (
        article_id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        category_id INT NOT NULL,
        article_title VARCHAR(255) NOT NULL,
        article_description VARCHAR(255) NOT NULL,
        PRIMARY KEY(article_id),
        FOREIGN KEY(user_id) REFERENCES USER(user_id),
        FOREIGN KEY(category_id) REFERENCES CATEGORY(category_id)
    );`;

    await con.query(sql);
}

const articles = [
    {
        article_id: 1,
        user_id: 1,
        category_id: 1,
        article_title: 'Messi The GOAT',
        article_description: 'Lionel Messi is the Greatest Of All Time.'
    },
    {
        article_id: 2,
        user_id: 2,
        category_id: 1,
        article_title: 'Ronaldo second best',
        article_description: 'Cristiano Ronaldo is one of the greatest goal scorers and that is it.'
    },
    {
        article_id: 3,
        user_id: 3,
        category_id: 1,
        article_title: 'Pele third best',
        article_description: 'Messi and Cristiano have better longevity than Pele.'
    }
]

const getAllArticles = () => {
    return articles;
}

createTable();

module.exports = { getAllArticles };