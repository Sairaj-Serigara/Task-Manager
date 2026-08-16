const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  completeTask,
  uncompleteTask,
} = require("../controllers/taskController");

router.route("/")
      .post(createTask)
      .get(getAllTasks);
      router.put("/:id", updateTask);
      router.delete("/:id", deleteTask);
      router.patch("/:id/complete", completeTask);
      router.patch("/:id/incomplete", uncompleteTask);

module.exports = router;