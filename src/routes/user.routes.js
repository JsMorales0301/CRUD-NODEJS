const { Router } = require('express');
const { check } = require('express-validator');
const { 
    getUsers,
    postUser, 
    putUser, 
    getUser, 
    deleteUser 
} = require('../controllers/user.controller');

const router = Router();

router.get('/', getUsers);
router.get('/:id_user', getUser);
router.post('/',[
    check('id_user', 'No es un ID válido').isString(),
],postUser);
router.put('/:id_user', putUser);
router.delete('/:id_user', deleteUser)

module.exports = router;