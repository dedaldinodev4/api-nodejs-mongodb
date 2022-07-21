import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { routes } from "./routes";


const server = express();

dotenv.config();
server.use(express.urlencoded({ extended: true}));
server.use(express.json())
server.use(cors());
server.use(express.json());
server.use(morgan('dev')); 

server.use(routes);

export { server };
