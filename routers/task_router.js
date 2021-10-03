import Router from "express";
import TaskController from "../controllers/task_controller.js"

const taskRouter = Router();


taskRouter.post("/", TaskController.addTask)
taskRouter.get("/", TaskController.getTasks)
taskRouter.put("/:id", TaskController.updateTask)
taskRouter.delete("/:id", TaskController.deleteTasks)

export default taskRouter;