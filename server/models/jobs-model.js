const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Job = new Schema(
    {
        companyName: { type: String, required: true },
        title: { type: String, required: true },
        dueDate: { type: String, required: false },
        salary: { type: Number, required: false },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    { timestamps: true },
)

module.exports = mongoose.model('jobTitles', Job)