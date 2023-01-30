const router = require('express').Router();
const { getAllUsers, createUser } = require('../controllers/user');

router.route('/').get(getAllUsers);

router.route('/').post(createUser);

module.exports = router;
