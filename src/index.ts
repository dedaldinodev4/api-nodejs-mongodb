import { server } from "./server";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { configs } from './configs';



dotenv.config();

const { MONGO_ATLAS_URL } = configs.variables.mongo;

mongoose.connect(`${MONGO_ATLAS_URL}`)
    .then(res => console.log('Database connected.'))
    .catch(err => console.log(err));


server.listen(process.env.PORT, () => {
    console.log(`Server is running`)
})