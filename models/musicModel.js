const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let musicSchema = new Schema({
    url: {
        type: 'string',
        required: true 
    },
    last_name:{
        type:'string',
        required: true
    },
    first_name:{
        type: 'string',
        required: true
    },
    submit_date:{
        type: Date, 
        default: Date.now,
        required: true
    }
})

module.exports = mongoose.model('Music', musicSchema);