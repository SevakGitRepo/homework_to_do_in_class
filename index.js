import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import KEYS from "./config/config.js";
import taskRouter from "./routers/task_router.js";

const app = express();

app.use(express.json());
app.use(morgan("short"));//url neri hamar
app.use(express.urlencoded({extended:true}));//Postmani hamara


app.use("/tasks", taskRouter);

app.use(function (req, res){
    res.status(404).send("not found");
})

mongoose.connect(KEYS.DB_URL)
    .then(()=>{
        app.listen(KEYS.PORT, ()=>console.log("server start in port "+KEYS.PORT));
    })
