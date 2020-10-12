const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Job = new Schema(
    {
        title: { type: String, required: true },
        dateApplied: { type: String, required: true },
        completed: { type: Boolean, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('jobs', Job)