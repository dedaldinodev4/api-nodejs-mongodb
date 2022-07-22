import { Document } from 'mongoose';
import { Request } from 'express'


export interface IExpressRequest extends Request {
    userId: string;
}

export interface IUser extends Document{
    name: string;
    email: string;
    phone: string;
    companyName?:string; 
    password: string;
    avatar_url?: string;
    createAt: Date;
}

export interface IUserRequestDTO extends Document{
    name:string | any;
    email: string | any;
    password: string | any;
    companyName: string | any;
    phone: string | any;
}



export interface IUserLogin  {
    email: string;
    password: string;
}

type User = {
    id: string;
    name:string;
    email: string;
    companyName: string;
    phone: string;
} 

export interface IUserData {
    user: User,
    token: string;
}



export interface IUserRequestUpdateDTO {
    _id?: string;
    name:string;
    email: string;
    companyName?: string;
    phone?: string;
}

