const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "Task Required"],
    maxLength: [20, "Task length cannot exceed 20 characters"],
  }
});

module.exports = mongoose.model("Task", TaskSchema);
