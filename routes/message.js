const router = require('express').Router();
const {
  createMessage,
  getRecipientMessages,
} = require('../controllers/message');

router.route('/').post(createMessage);
router.route('/recipient').post(getRecipientMessages);

module.exports = router;
