import { Schema, model } from 'mongoose';
import { IUser } from '../dtos/User';


const UserSchema: Schema = new Schema({
    name: { 
        type: String,
        required: true
    },
    avatar_url: {
        type: String,
    },
    phone: {
        type: String
    },
    companyName: {
        type: String
    },
    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default model<IUser>('User', UserSchema);

