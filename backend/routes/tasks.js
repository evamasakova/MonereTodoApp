const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks");

/**
 * Endpoint routes for tasks.
 */
router.get("/list", tasksController.getAllTasks);
router.get("/inactive", tasksController.getAllInactiveTasks);
router.get("/active", tasksController.getAllActiveTasks);
router.post("/create-task", tasksController.createTask);
router.get("/list/:id", tasksController.findTaskById);
router.put("/deactivate/:id", tasksController.checkOff);
router.get("/category/:categoryID", tasksController.getTasksByCategoryID);

module.exports = router;
