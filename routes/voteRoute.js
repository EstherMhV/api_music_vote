const express = require('express');
const router = express.Router();
const commentController = require('../controllers/voteController');

router
    .route('/musics/:id_music/votes')
    .get(commentController.listAllComments)
    .post(commentController.createAComment)

router
    .route('/votes/:id_vote')
    .get(commentController.getAComment)
    .put(commentController.updateAComment)
    .delete(commentController.deleteAComment)

module.exports = router;
