const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let musicSchema = new Schema({
    url: {
        type: 'varchar',
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
        type: 'datetime',
        required: true
    }
})

module.exports = mongoose.model('Music', musicSchema);