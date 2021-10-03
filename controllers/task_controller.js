import TaskService from "../services/task_service.js"

class TaskController{
    //localhost:8080/tasks
    async addTask(req, res){
        try{
            let task = await TaskService.addTask(req.body);
            await res.status(200).json(task);
        }catch (err){
            res.status(409).json("Bad request");
        }
    };

    //localhost:8080/tasks
    async getTasks(req, res){
        try{
            let tasks = await TaskService.getAllTasks();
            await res.status(200).json(tasks);
        }catch (err){
            res.status(409).json("Bad request");
        }
    };

    //localhost:8080/tasks/:{id}
    async updateTask(req, res){
        try{
            let task = await TaskService.updateTask(req.params.id, req.body);
            await res.status(200).json(task);
        }catch (err){
            res.status(409).json("Bad request");
        }
    };

    //localhost:8080/tasks/:{id}
    async deleteTasks(req, res){
        try{
            let task = await TaskService.deleteTask(req.params.id);
            await res.status(200).json(task);
        }catch (err){
            res.status(409).json("Bad request");
        }
    };

}

export default new TaskController();