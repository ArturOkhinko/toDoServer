const { Schema, model } = require("mongoose");

const TaskShema = new Schema({
  id: String,
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Number, required: true, default: 0 },
});

module.exports = model("Task", TaskShema);
