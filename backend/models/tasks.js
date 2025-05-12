const mongoose = require("mongoose");
const TaskUtil = require("../utils/tasks.utils");

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  categoryID: {  type: mongoose.Schema.Types.ObjectId, ref: 'Category' , required: true },
  detail: { type: String, required: false },
  significance: { type: String, required: false },
  date: {
    type: Date,
    required: true,
    validate: {
      validator: TaskUtil.validateDate,
      message: "Date must be today or in the future.",
    },
  },
  active: { type: Boolean, required: true, default: true },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
