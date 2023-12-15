const con = require('./db_connect');

async function createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS USER (
        user_id INT NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        user_name VARCHAR(255) NOT NULL,
        user_password VARCHAR(255) NOT NULL,
        PRIMARY KEY(user_id),
        UNIQUE user_name_idx(user_name)
    );`;

    await con.query(sql);
}

const users = [
    {
        userId: 1,
        firstName: 'Lionel',
        lastName: 'Messi',
        userName: 'LM10'
    },
    {
        userId: 2,
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        userName: 'CR7'
    },
    {
        userId: 3,
        firstName: 'Pele',
        lastName: '',
        userName: 'Pele10'
    }
]

const getAllUsers = async () => {
    return await users;
}

const login = async (user) => {
    let userResult = await getUser('user_name', user.userName)
    if(!userResult[0]) throw Error("Username not found!!")
    if(userResult[0].user_password != user.password) throw Error("Password Incorrect!!")
  
    return userResult[0]
  }

const register = async (user) => {
    const userResult = await getUser('user_name', user.userName)
    if(userResult.length > 0) throw Error("Username already in use!!")

    let sql = `
        INSERT INTO user (first_name, last_name, user_name, user_password)
        VALUES ("${user.firstName}", "${user.lastName}", "${user.userName}", "${user.password}");
    `

    await con.query(sql)
    const newUser = await getUser('user_name', user.userName)
    return newUser[0]
}

const editUserName = async (user) => {
    let updatedUser = await getUser('user_id', user.userId)
    if(updatedUser.length == 0) throw Error("Username not available!")
  
    let sql = `UPDATE user
      SET user_name = "${user.userName}"
      WHERE user_id = ${user.userId}
    `
    await con.query(sql)
    updatedUser = await getUser('user_name', user.userName)
    return updatedUser[0]
}
  
// Delete User 
const deleteUser = async (user) => {
    let sql = `DELETE FROM user
        WHERE user_id = ${user.userId}
    `
    await con.query(sql)
}

const getUser = async (column, value) => {
    let sql = `
        SELECT * FROM user
        WHERE ${column} = "${value}";
    `
    return await con.query(sql)
}

createTable();

module.exports = { getAllUsers, login, register, getUser, editUserName, deleteUser };