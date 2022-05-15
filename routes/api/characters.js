const express = require('express');
const router = express.Router();
const charactersCtrl = require('../../controllers/api/characters')

router.post('/', charactersCtrl.create);

module.exports = router