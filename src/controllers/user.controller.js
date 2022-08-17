const { request, response } = require('express');
const Usuario = require('../model/user.model');

const getUsers = async (req = request, res = response) => {
        
    const usuarios = await Usuario.findAll();

    res.status(200).json({
        usuarios
    });
}

const getUser = async (req = request, res = response) => {

    const { id_user } = req.params;

    const usuario = await Usuario.findByPk(id_user);

    if( usuario ){
        res.status(200).json( usuario ) 
    } else {
        res.statusCode(404).json({
            msg: `No existe un usuario con el id ${ id_user }`
        });
    }    
}

const postUser = async (req = request, res = response) => {
    const body = req.body;

    const newUsuario = new Usuario(body);
    newUsuario.save();
    res.json( newUsuario );
}

const putUser = async (req = request, res = response) => {

}

const deleteUser = async (req = request, res = response) => {

}

module.exports = {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
}