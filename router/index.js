const Router = require("express").Router;
const taskController = require("../controllers/TaskController");

const route = new Router();

route.get("/getTasks", taskController.getTasks);
route.post("/createTask", taskController.createTask);
route.delete("/removeTask", taskController.removeTask);
route.put("/correctTask", taskController.correctTask);

module.exports = route;
