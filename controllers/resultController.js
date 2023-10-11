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

exports.ModifyResult = async (req, res) => {
        
    if (voteControler.createAResult) {
        try {

            const result = await Result.findOne({ vote_id: req.body.vote_id });
            if (result) {
                
                result.total += savedVote.rating; 
                await result.save();
            } else {
                
                const newResult = new Result({
                    item_id: req.body.vote_id,
                    total: savedVote.rating
                });
                await newResult.save();
            }
            
            res.status(200).json(savedVote);
        } catch (error) {
            res.status(500);
            console.error(error);
            res.json({ message: 'Erreur serveur' });
        }
   }
}