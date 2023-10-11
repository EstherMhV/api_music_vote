const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    music_id:{
        type: String,
    }

})