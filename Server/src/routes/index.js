const express = require('express')

const {getCharById} = require ('../controllers/getCharById');
const login = require('../controllers/login')
const posUser = require('../controllers/postUser')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')

const router = express.Router();

router.get('/login', login)
router.post('/login', posUser)
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);
router.get('/character/:id', getCharById);


module.exports = {
    router
};
