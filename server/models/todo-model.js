const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ToDo = new Schema(
    {
        title: { type: String },
        jobID: { type: String },
        completed: { type: Boolean },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true },
)

module.exports = mongoose.model('toDoList', ToDo)
