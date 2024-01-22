const ApiError = require("../Api-err/ApiError");
const TaskModel = require("../models/task-model");
const { v4 } = require("uuid");
class TaskService {
  async getTasks() {
    const tasks = await TaskModel.find();
    return tasks;
  }
  async createTask(title, description) {
    try {
      const id = v4();
      const task = await TaskModel.create({
        id,
        title,
        description,
      });
      return task.id;
    } catch (e) {
      console.log(e);
      throw ApiError.BadRequest("error write in DB", [e]);
    }
  }
  async removeTask(id) {
    await TaskModel.deleteOne({ id: id });
  }
  async correctTask(id, task) {
    const filter = { id };
    const update = {
      $set: {
        ...task,
      },
    };
    try {
      const task = await TaskModel.updateOne(filter, update);
      console.log(task);
    } catch (e) {
      console.log(e);
    }
    return "";
  }
}

module.exports = new TaskService();
