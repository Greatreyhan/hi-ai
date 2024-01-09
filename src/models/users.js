const pool = require('../config/database')

const getAllUsers = () =>{
    const SQLQuery = 'SELECT * FROM users';

    return pool.execute(SQLQuery);
}

const createNewUser = (body) =>{
    const SQLQuery = `INSERT INTO users (name,email)
                      VALUE ('${body.name}','${body.email}')`;
    return pool.execute(SQLQuery);
}

const updateUser = (body, id) =>{
    const SQLQuery = `UPDATE users 
                      SET name='${body.name}', email='${body.email}'
                      WHERE id=${id}`
    return pool.execute(SQLQuery);
}

const deleteUser = (id) =>{
    const SQLQuery =  `DELETE FROM users WHERE id=${id}`;
    return pool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}