import dotenv from 'dotenv';
dotenv.config();

export const {
  SALT_ROUNDS = 10,
  SECRET_JWT_KEY,
  URL_DATA
} = process.env;
