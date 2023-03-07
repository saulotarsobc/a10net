import dotenv from 'dotenv';
dotenv.config();
import { getAuth } from './a10api';
import { getAuthParamsType } from './types';

const authParams: getAuthParamsType = {
    addr: process.env.addr,
    port: process.env.port,
    user: process.env.user,
    pass: process.env.pass,
};

setTimeout(async () => {
    const auth = await getAuth(authParams);
    console.log(auth);
});