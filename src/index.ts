import { server } from "./server";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { configs } from './configs';



dotenv.config();

const { APP_PORT, APP_BASEURL } = configs.variables.app;
const { MONGO_STRING, MONGO_DB, MONGO_ATLAS_URL } = configs.variables.mongo;

mongoose.connect(`${MONGO_ATLAS_URL}`)
    .then(res => console.log('Database connected.'))
    .catch(err => console.log(err));


server.listen(APP_PORT, () => {
    console.log(`Server is running in url ${APP_BASEURL}`)
})