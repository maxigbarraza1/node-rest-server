const { response,request } = require('express')

const getUsers = (req = request, res = response) => {

    const { q, name, apikey, page, limit} = req.query;

    res.json({
        msg: 'getAPI - CONTROLLER',
        q,
        name,
        apikey,
        page,
        limit
    });
}

const postUsers = (req, res = response) => {

    const {nombre, edad} = req.body;
    
    res.json({
        msg: 'postAPI - CONTROLLER',
        nombre,
        edad
    });
}

const putUsers = (req, res = response) => {

    const { id } = req.params.id

    res.json({
        msg: 'putAPI - CONTROLLER',
        id
    });
}

const deleteUsers = (req, res = response) => {
    res.json({
        msg: 'deleteAPI - CONTROLLER'
    });
}


module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,

}