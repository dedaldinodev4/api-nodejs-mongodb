import { Document } from 'mongoose';


export interface IHero extends Document {
    id?: string;
    name: string;
    age: number;
    power: string;
    team: string | null;
    createAt: Date;
}


export interface IHeroRequest {
    name: string;
    age: number;
    power: string;
    team: string;
}

export interface IHeroUpdateRequest {
    name: string;
    age: number;
    power: string;
    team: string;
}