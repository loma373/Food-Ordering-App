const express= require('express')
const router= express.Router();

const {
    addUser
} = require('../controllers/helper')

router.route('/adduser').post(addUser);


module.exports= router