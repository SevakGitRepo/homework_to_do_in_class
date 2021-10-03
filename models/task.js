import mongoose from "mongoose";

const Task = new mongoose.Schema({
        text: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 500
        },
        status: {
            type: Boolean,
            default: false
        }
    }
)

export default mongoose.model("Task", Task);