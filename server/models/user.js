import mongoose from "mongoose";
import { Schema} from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {type: String, min:4, require: true, unique: true},
    rollno: {type: String, unique: true},
    year : {type: Number},
    stream: {type: String},
    password : {type: String, min: 4}

})


const Users = mongoose.model('USER', userSchema);
export default Users