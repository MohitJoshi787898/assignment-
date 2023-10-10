import { Schema, model, models } from "mongoose";
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
    },
    number: {
        type: String,
    },
    password: {
        type: String,
    }


})
const UserFrom=models.UserFrom || model("UserFrom",userSchema)

export default UserFrom