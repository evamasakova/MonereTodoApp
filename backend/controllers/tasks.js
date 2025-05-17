const TaskDAO = require("../dao/tasks.dao");
const CategoryDAO = require("../dao/categories.dao");
const TaskUtil = require("../utils/tasks.utils");
const CategoryUtil = require("../utils/categories.utils");
const { validateDate } = require("../utils/tasks.utils");

exports.getAllTasks = async (req, res, next) => {
  const tasks = await new TaskDAO().getAllTasks();
  if (TaskUtil.validateIfTasksEmpty(tasks)) {
    return res.status(200).send({
      msg: "Tasks found!",
      payload: [tasks],
    });
  }
  res.status(404).send({ msg: "Tasks not found" });
};

exports.createTask = async (req, res, next) => {
  const validationFailed = TaskUtil.validateTaskInput(req.body);
  console.log(req.body);
  if (validationFailed.length > 0) {
    return res.status(400).send({
      msg: "Validation failed",
      errors: validationFailed,
    });
  }
  const { categoryID } = req.body;
  console.log(categoryID);

  const isValidCategory = await CategoryUtil.validateIfCategoryExists(
    categoryID
  );
  if (!isValidCategory) {
    return res.status(400).json({
      errors: "Invalid category ID",
    });
  }
  if (!validateDate(req.body.date)) {
    console.error("Invalid date:", req.body.date); // Log invalid date
    return res.status(400).json({
      errors: "Invalid date",
    });
  }
  const data = await new TaskDAO().createTask(req.body);
  return res.status(201).send({
    msg: "Task created!",
    payload: data,
  });
};

exports.findTaskById = async (req, res, next) => {
  try {
    const data = await new TaskDAO().getTaskById(req.params.id);
    if (data) {
      return res.status(200).send({
        msg: "Task found!",
        payload: data,
      });
    }
    res.status(404).send({ msg: "Task not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * function to check off a task, changes status of task to inactive, loads new task
 */
exports.checkOff = async (req, res, next) => {
  try {
    const data = await new TaskDAO().checkOff(req.params.id);
    if (data) {
      return res.status(200).send({
        msg: "Task checked off",
        payload: data,
      });
    }
    res.status(404).send({ msg: "Task not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllInactiveTasks = async (req, res, next) => {
  try {
    const tasks = await new TaskDAO().getAllInactiveTasks();
    console.log(tasks);

    if (TaskUtil.validateIfTasksEmpty(tasks)) {
      return res.status(200).send({
        msg: "Inactive tasks found!",
        payload: tasks,
      });
    }
    return res.status(404).send({
      msg: "Tasks empty",
    });
  } catch (error) {
    res.status(404).send({ msg: "Inactive tasks not found" });
  }
};
exports.getAllActiveTasks = async (req, res, next) => {
  try {
    const tasks = await new TaskDAO().getAllActiveTasks();
    if (TaskUtil.validateIfTasksEmpty(tasks)) {
      return res.status(200).send({
        msg: "Active tasks found!",
        payload: tasks,
      });
    }
    return res.status(404).send({
      msg: "Tasks empty",
    });
  } catch (error) {
    res.status(404).send({ msg: "Active tasks not found" });
  }
};

exports.getTasksByCategoryID = async (req, res, next) => {
  const { categoryID } = req.params;
  // Validate category
  const isValidCategory = await CategoryUtil.validateIfCategoryExists(
    categoryID
  );
  if (!isValidCategory) {
    return res.status(400).json({
      msg: "Invalid category ID",
      payload: null,
    });
  }
  const data = await new TaskDAO().getTasksByCategory(categoryID);
  if (TaskUtil.validateIfTasksEmpty(data)) {
    return res.status(200).send({
      msg: "Tasks filtered!",
      payload: data,
    });
  }
  return res.status(404).send({
    msg: "Tasks empty",
  });
};
