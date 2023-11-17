import { config } from "dotenv";
config();

export const PORT = process.env.PORT || '3000'
export const DB_USER = process.env.DB_USER || 'user';
export const DB_PASSWORD = process.env.DB_PASSWORD || '4yunde4I7R0GYArl';
export const DB_NAME = process.env.DB_NAME || 'dbname';
export const MONGODB_URI = process.env.MONGODB_URI || ''