const Music = require('../models/musicModel');

exports.listAllMusics = async (req, res) => {
    try {
        const music = await Music.find({});
        res.status(200);
        res.json(music);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
}

exports.createAMusic = async (req, res) => {
    const newMusic = new Music(req.body);

    try {
        const music = await newMusic.save();
        res.status(200);
        res.json(music);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
}

exports.updateAMusic = async (req, res) => {
    try {
        const music = await Music.findByIdAndUpdate(req.params.id_music, req.body, { new: true });
        res.status(200);
        res.json({ message: 'modifier' });
        res.json(music);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
}

exports.deleteAMusic = async (req, res) => {

    try {
        const music = await Music.findByIdAndDelete(req.params.id_music, req.body, { new: true });
        res.status(200);
        res.json({ message: 'Supprimé' });
        

    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
}

exports.getAMusic = async (req, res) => {

    try {
        const music = await Music.findById(req.params.id_music);
        res.status(200);
        res.json(music);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
}