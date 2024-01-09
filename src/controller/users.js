const usersModel = require('../models/users')

const getAllUsers = async (req, res, next) => {
    try {
        const [data, fields] = await usersModel.getAllUsers();
        res.json({
            message: 'GET users success',
            data: data
        })
    }
    catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res, next) => {
    const {body} = req;
    if(!body.email || !body.name){
        return res.status(400).json({
            message: "Anda mengirimkan data yang salah",
            data : null
        })
    }
    try{
        await usersModel.createNewUser(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    }
    catch(err){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: err,
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const {body} = req
    if(!body.email || !body.name || !id){
        return res.status(400).json({
            message: "Anda mengirimkan data yang salah",
            data : null
        })
    }
    try{
        await usersModel.updateUser(body, id);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: id,
                ...body
            }
        })
    }
    catch(err){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: err,
        })
    }  
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    if(!id){
        return res.status(400).json({
            message: "Anda mengirimkan data id yang salah",
            data : null
        })
    }
    try{
        await usersModel.deleteUser(id);
        res.json({
            message: 'DELETE user success',
        })
    }
    catch(err){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: err,
        })
    }  
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}