import { config } from "dotenv";
config();

export const PORT = process.env.PORT || '3000';
export const MONGODB_URI = process.env.MONGODB_URI || '';
export const OPEN_AI_API = process.env.OPEN_AI_API || '';
export const OPEN_AI_ORGANIZATION = process.env.OPEN_AI_ORGANIZATION;