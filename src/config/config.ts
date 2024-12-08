import 'dotenv/config'

export const PORT = process.env.PORT || 5000;
export const DB_URI = process.env.DB_URI || '';
export const JWT_SECRET = process.env.JWT_SECRET || '';
export const DB_REDIS_PASS = process.env.DB_REDIS_PASS || "";
export const DB_REDIS_HOST = process.env.DB_REDIS_HOST || "";
export const DB_REDIS_PORT = process.env.DB_REDIS_PORT || 6379;