const Vote = require('../models/voteModel');
const Result = require('../models/resultModel');

exports.listAllVotes = async (req,res) => {
    try {
        const votes = await Results.find({post_vote: req.params.id_vote});
        res.status(200);
        res.json(results);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message:'Erreur serveur'});
    }
}

exports.createAResult = async (req, res) => {

    try {
        const result = await Result.findById(req.params.id_vote);
        const newResult = new Vote({...req.body,music_id: req.params.id_music});


        try{
            const vote = await newVote.save();
            res.status(200);
            res.json(vote);
        }
        catch (error) {
            res.status(500);
            console.log(error);
            res.json({ message: 'Erreur serveur(db)' });
        }
    }catch(error){
        console.log(error);
        res.json({ message: 'Erreur serveur(music_id inexistant' });
    }
}