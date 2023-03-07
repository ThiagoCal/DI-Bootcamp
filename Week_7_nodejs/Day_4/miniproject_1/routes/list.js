const express = require('express');
const {_getList, _insertToList}  = require('../controllers/list.js')
const router = express.Router();

router.get('/list', _getList);

router.post('/formData', _insertToList)



module.exports = router