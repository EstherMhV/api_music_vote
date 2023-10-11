const Vote = require('../models/voteModel');
const Music = require('../models/musicModel');

exports.listAllVotes = async (req,res) => {
    try {
        const votes = await Vote.find({post_music: req.params.id_music});
        res.status(200).json(votes);
    }
    catch (error) {
        res.status(500).json({ message:'Erreur serveur'});
    }
}

exports.createAVote = async (req, res) => {
    try {
        const music = await Music.findById(req.params.id_music);
        if (!music) {
            return res.status(404).json({ message: 'Musique non trouvée' });
        }

        
        const newVote = new Vote({...req.body, music_id: req.params.id_music});
        const savedVote = await newVote.save();
        res.status(200).json(savedVote);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
}

exports.updateAVote = async(req, res) => {
    try {
        const updatedVote = await Vote.findByIdAndUpdate(req.params.vote_id, req.body, {new: true});
        if (!updatedVote) {
            return res.status(404).json({ message: 'Vote non trouvé' });
        }
        res.status(200).json(updatedVote);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
}

exports.deleteAVote = async(req, res) => {
    try {
        const deletedVote = await Vote.findByIdAndDelete(req.params.vote_id);
        if (!deletedVote) {
            return res.status(404).json({ message: 'Vote non trouvé' });
        }
        res.status(200).json({ message: 'Supprimé' });
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
}

exports.getAVote = async(req, res) => {
    try {
        const vote = await Vote.findById(req.params.vote_id);
        if (!vote) {
            return res.status(404).json({ message: 'Vote non trouvé' });
        }
        res.status(200).json(vote);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
}