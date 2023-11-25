import mongoose, { Schema } from "mongoose";

export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
}

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Please input your username"],
        },
        email: {
            type: String,
            required: [true, "Please input your email"],
        },
        password: {
            type: String,
            required: [true, "Please input your password"],
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;