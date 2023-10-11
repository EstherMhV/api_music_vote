const Vote = require('../models/voteModel');
const Music = require('../models/musicModel');

exports.listAllVotes = async (req,res) => {
    try {
        const votes = await Votes.find({post_music: req.params.id_music});
        res.status(200);
        res.json(votes);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message:'Erreur serveur'});
    }
}


exports.createAVote = async (req, res) => {

    try {
        const vote = await Vote.findById(req.params.id_music);
        const newVote = new Vote({...req.body,music_id: req.params.id_music});


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

exports.updateAVote = async(req, res) =>{
    try{
        const vote = await Vote.findByIdAndUpdate(req.params.id_music, req.body, {new: true});
        if(!vote){
            res.status(204)
            console.log(error);
            res.json({ message : 'id not found'});

        }else{

        }
        res.status(200);
        res.json(vote);
    }
    catch(error){
        res.status(500);
        console.log(error);
        res.json({ message : 'Erreur serveur'});
    }
}

exports.deleteAVote = async(req, res) =>{

    try{
        const vote = await Vote.findByIdAndDelete(req.params.id_music, req.body, {new: true});
        res.status(200);
        res.json({ message : 'Supprimé'});
    }
    catch(error){
        res.status(500);
        console.log(error);
        res.json({ message : 'Erreur serveur'});
    }
}

exports.getAVote = async(req, res) =>{

    try{
        const vote =await Vote.findById(req.params.id_music);
        res.status(200);
        res.json(vote);
    }
    catch(error){
        res.status(500);
        console.log(error);
        res.json({ message : 'Erreur serveur'});
    }
}
