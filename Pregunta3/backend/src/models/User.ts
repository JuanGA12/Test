import {Schema,  model, Document } from 'mongoose'

interface IUser extends Document{
    user_name: string;
    password: string;
}
const UserSchema = new Schema({
    user_name:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
})

export default model<IUser>('User',UserSchema);