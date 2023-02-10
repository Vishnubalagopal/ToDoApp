// models/todo.js
const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    },
    priority:{
        type:"Number"
    },
    status: {
        type: "String",
        default: 'pending',
      }
});

const Todo = mongoose.model("todo", TodoSchema);



module.exports = Todo