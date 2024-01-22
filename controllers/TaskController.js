const taskService = require("../services/TaskService");

class TaskController {
  async getTasks(req, res, next) {
    try {
      const tasks = await taskService.getTasks();
      res.json({ tasks });
    } catch (e) {
      next(e);
    }
  }

  async createTask(req, res, next) {
    try {
      const { title, description } = req.body;
      const idTask = await taskService.createTask(title, description);
      res.json({ id: idTask });
    } catch (e) {
      next(e);
    }
  }

  removeTask(req, res, next) {
    try {
      const { id } = req.body;
      taskService.removeTask(id);
      res.json();
    } catch (e) {
      next(e);
    }
  }
  correctTask(req, res, next) {
    try {
      const { id, task } = req.body;
      taskService.correctTask(id, task);
      res.json({ message: "ok" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TaskController();
