const Vote = require('../models/voteModel');
const Result = require('../models/resultModel');

exports.listAllVotes = async (req,res) => {
    try {
        const results = await Result.find({post_vote: req.params.id_vote});
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500);
        console.error(error);
        res.json({ message:'Erreur serveur'});
    }
}

// exports.createAResult = async (req, res) => {
//     try {
//         const result = await Result.findById(req.params.id_vote);
//         const newResult = new Result({...req.body, vote_id: req.params.id_vote});

//         try {
//             const vote = await newResult.save();
//             res.status(200).json(result);
//         }
//         catch (error) {
//             res.status(500);
//             console.error(error);
//             res.json({ message: 'Erreur serveur (DB issue)' });
//         }
//     }
//     catch(error) {
//         console.error(error);
//         res.json({ message: 'Erreur serveur (Incirrect vote_id)' });
//     }
// }

