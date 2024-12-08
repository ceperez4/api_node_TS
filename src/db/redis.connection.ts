import { createClient } from "redis";
import { DB_REDIS_HOST, DB_REDIS_PASS, DB_REDIS_PORT } from "../config/config";

export const clientRedis = createClient({
    password:DB_REDIS_PASS,
    socket:{
     host:DB_REDIS_HOST,
     port:Number(DB_REDIS_PORT),
     tls:false,
     connectTimeout:50000,
    },
    database:1
});
 