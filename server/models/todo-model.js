const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ToDo = new Schema(
    {
        title: { type: String, required: true },
        jobID: { type: String },
        completed: { type: Bool },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true },
)

module.exports = mongoose.model('toDoList', ToDo)
