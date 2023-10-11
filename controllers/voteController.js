const Vote = require('../models/voteModel');
const Music = require('../models/musicModel');

exports.listAllVotes = async (req,res) => {
    try {
        const votes = await Vote.find({post_music: req.params.id_music});
        res.status(200).json(votes);
    }
    catch (error) {
        res.status(500).json({ message:'Error server'});
    }
}

exports.createAVote = async (req, res) => {
    try {
        const music = await Music.findById(req.params.id_music);
        if (!music) {
            return res.status(404).json({ message: 'Music not find' });
        }

        const rating = req.body.rating;
        if (rating < 1 || rating > 5){
            return res.status(404).json({ message: 'The rating must be between 1 and 5'});
        }
        const currentDateString = new Date().toISOString().split('T')[0];
        const musicSubmissionDateString = music.submit_date.toISOString().split('T')[0];

        if (currentDateString !== musicSubmissionDateString) {
            return res.status(400).json({ message: 'submition-date must equal music_submition_date' });
        }



        const newVote = new Vote({...req.body, music_id: req.params.id_music});
        const savedVote = await newVote.save();
        res.status(200).json(savedVote);
    }
    catch (error) {
        res.status(500).json({ message: 'Error server' });
    }
}

exports.updateAVote = async(req, res) => {
    try {
        const updatedVote = await Vote.findByIdAndUpdate(req.params.vote_id, req.body, {new: true});
        if (!updatedVote) {
            return res.status(404).json({ message: 'Vote not found' });
        }
        res.status(200).json(updatedVote);
    }
    catch (error) {
        res.status(500).json({ message: 'Error server' });
    }
}

exports.deleteAVote = async(req, res) => {
    try {
        const deletedVote = await Vote.findByIdAndDelete(req.params.vote_id);
        if (!deletedVote) {
            return res.status(404).json({ message: 'Vote not found' });
        }
        res.status(200).json({ message: 'Supprimé' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error server' });
    }
}

exports.getAVote = async(req, res) => {
    try {
        const vote = await Vote.findById(req.params.vote_id);
        if (!vote) {
            return res.status(404).json({ message: 'Vote not found' });
        }
        res.status(200).json(vote);
    }
    catch (error) {
        res.status(500).json({ message: 'Error server' });
    }
}