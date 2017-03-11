var mongoose = require('mongoose');

var SnippetSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    code : {
        type: String,  // TODO mongoose-function
        required: true
    }
});

module.exports = mongoose.model('snippets', SnippetSchema);
