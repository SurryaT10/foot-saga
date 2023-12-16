const con = require('./db_connect');

async function createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS ARTICLE (
        article_id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        category_id INT NOT NULL,
        article_title VARCHAR(255) NOT NULL UNIQUE,
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

const getAllArticles = async (userId) => {
    const sql = `SELECT * FROM article WHERE user_id = ${userId}`;

    return await con.query(sql);
}

async function getArticle(column, value) {
    const sql = `
        SELECT * FROM article WHERE ${column} = "${value}";
    `;

    const article = await con.query(sql);
    return article[0];
}

const createArticle = async (article) => {
    let sql = `
        INSERT INTO article (user_id, category_id, article_title, article_description)
        VALUES ("${article.userId}", "${article.categoryId}", "${article.title}", "${article.content}");
    `

    console.log(article)
    console.log(article);

    await con.query(sql);

    const newArticle = await getArticle('article_title', article.title);
    return newArticle;
}

const editArticle = async (article) => {
    let existingArticle = await getArticle('article_id', article.articleId)
    if(existingArticle.length == 0) throw Error("Article not available!");
  
    let sql = `UPDATE article SET
        user_id = ${article.userId},
        category_id = ${article.categoryId},
        article_title = "${article.articleTitle}",
        article_description = "${article.articleDescription}"
        WHERE article_id = ${article.articleId}
    `
    await con.query(sql)
    const updatedArticle = await getArticle('article_id', article.articleId);

    return updatedArticle
}
  
const deleteArticle = async (article) => {
    let sql = `DELETE FROM article
        WHERE article_id = ${article.articleId}
    `
    await con.query(sql)
}

createTable();

module.exports = { getAllArticles, createArticle, getArticle, editArticle, deleteArticle };