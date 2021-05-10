const db = require('../../config/dbConfig');

async function addNewUser(user) {
    try {
        const ids = await db('users').insert(user, 'id');
        const id = ids[0];
        const response = await findUserById(id);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function findUserById(id) {
    try {
        const user = await db('users')
            .select('id', 'firstName', 'lastName', 'email')
            .where({id: id})
            .first();
        return user
    } catch (error) {
        console.log(error)
    }
}

async function getBy(filter) {
    try {
        const user = await db('users')
        .select('id', 'firstName', 'lastname', 'password', 'email')
        .where(filter)
        .first()
        return user;
    } catch(error) {
        console.log(error)
    }
}

async function findUsers() {
    try {
        const users = await db('users')
            .select('id', 'firstName', 'lastName', 'email')
        return users;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addNewUser,
    findUserById,
    getBy,
    findUsers
}