const Vote = require('../models/voteModel');
const Music = require('../models/musicModel');

exports.listAllVotes = async (req,res) => {
    try {
        const comments = await Comment.find({post_id: req.params.id_post});
        res.status(200);
        res.json(comments);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message:'Erreur serveur'});
    }
}


exports.createAComment = async (req, res) => {

    try {
        const post = await Post.findById(req.params.id_post);
        const newCommment = new Comment({...req.body, post_id: req.params.id_post});


        try{
            const comment = await newCommment.save();
            res.status(200);
            res.json(comment);
        }
        catch (error) {
            res.status(500);
            console.log(error);
            res.json({ message: 'Erreur serveur(db)' });
        }
    }catch(error){
        console.log(error);
        res.json({ message: 'Erreur serveur(post-id inexistant' });
    }
}

exports.updateAComment = async(req, res) =>{
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id_post, req.body, {new: true});
        if(!comment){
            res.status(204)
            console.log(error);
            res.json({ message : 'id not found'});

        }else{

        }
        res.status(200);
        res.json(comment);
    }
    catch(error){
        res.status(500);
        console.log(error);
        res.json({ message : 'Erreur serveur'});
    }
}

exports.deleteAComment = async(req, res) =>{

    try{
        const comment = await Comment.findByIdAndDelete(req.params.id_post, req.body, {new: true});
        res.status(200);
        res.json({ message : 'Supprimé'});
    }
    catch(error){
        res.status(500);
        console.log(error);
        res.json({ message : 'Erreur serveur'});
    }
}

exports.getAComment = async(req, res) =>{

    try{
        const comment =await Comment.findById(req.params.id_post);
        res.status(200);
        res.json(comment);
    }
    catch(error){
        res.status(500);
        console.log(error);
        res.json({ message : 'Erreur serveur'});
    }
}
