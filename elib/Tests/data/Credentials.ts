import dotenv from 'dotenv';

dotenv.config();

export const credentials: {
    baseUrl: string;
    email: string;
    password: string;
    welcome: string;
}={
    baseUrl: process.env.BASEURL?? '',
    email: process.env.EMAIL?? '',
    password: process.env.PASSOWRD?? '',
    welcome: process.env.WELCOME?? '',
};