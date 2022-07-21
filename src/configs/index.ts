import dotenv from 'dotenv';

dotenv.config();

const {
    APP_PORT, APP_BASEURL,
    MONGO_DB, MONGO_STRING, MONGO_ATLAS_URL
} = process.env;

const configs = {
    variables: {
        app: {
            APP_PORT,
            APP_BASEURL,
        },
        mongo: {
            MONGO_STRING,
            MONGO_DB,
            MONGO_ATLAS_URL,
        }
    }        
}


export { configs };