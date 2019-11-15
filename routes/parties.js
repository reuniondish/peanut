const express = require('express');
const { getParties, getParty, updateParty, createParty, deleteParty } = require('../controllers/parties');
const router = express.Router();

router.route('/').get(getParties).post(createParty);

router.route('/:id').get(getParty).put(updateParty).delete(deleteParty);

module.exports = router;