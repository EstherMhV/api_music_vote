const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

// route de base pour accceder a la music

router
    .route('/music')
    .get(musicController.listAllMusics)
    .post(musicController.createAMusic) 

// ROUTE DE BASE POUR LES ID

router
    .route('/music/:id_music')
    .get(musicController.getAMusic)
    // .put(musicController.updateAMusic)
    // .delete(musicController.deleteAMusic)

module.exports = router;