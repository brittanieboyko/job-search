const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Job = new Schema(
    {
        title: { type: String, required: true },
        dateApplied: { type: String, required: true },
        salary: { type: Number, required: false },
        completed: { type: Boolean, required: false },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    { timestamps: true },
)

module.exports = mongoose.model('jobTitles', Job)