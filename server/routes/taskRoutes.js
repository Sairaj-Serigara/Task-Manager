const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  completeTask,
} = require("../controllers/taskController");

router.route("/")
      .post(createTask)
      .get(getAllTasks);
      router.put("/:id", updateTask);
      router.delete("/:id", deleteTask);
      router.patch("/:id/complete", completeTask);

module.exports = router;