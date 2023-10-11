const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');

router
    .route('/vote/:id_vote/result')
    .get(resultController.listAllResults)


router
    .route('/result/:id_result')
    .get(resultController.getAResult)




module.exports = router;
