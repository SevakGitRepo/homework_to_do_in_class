import Task from "../models/task.js";

class TaskService{
    async addTask(task){
        return await Task.create(task);
    }

    async getAllTasks(){
        return Task.find();
    }

    async updateTask(id, task){
       return Task.findByIdAndUpdate(id, task,  {new: true});
    }

    async deleteTask(id){
        return Task.findByIdAndDelete(id);
    }
}

export default new TaskService();