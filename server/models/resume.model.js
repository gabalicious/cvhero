
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ResumeSchema = new Schema({
    basic: {
        description: { type: String, required: false },

    },
    title: { type: String, required: false },
    name: { type: String, required: false },
    user: { type: Schema.ObjectId, ref: 'User', required: false },
    summary: { type: String, required: true },
    genre: [{ type: Schema.ObjectId, ref: 'Genre' }]
});

// Virtual for this resume instance URL.
ResumeSchema
    .virtual('url')
    .get(function () {
        return '/catalog/resume/' + this._id;
    });

// Export model.
module.exports = mongoose.model('Resume', ResumeSchema);