import dotenv from 'dotenv';
dotenv.config();

export const credentials: {
  baseUrl: string;
  username: string;
  password: string;
  welcomeBack: string;
} = {
  baseUrl: process.env.BASE_URL || 'https://ilsp.cbsua-beta.centralizedinc.com/',
  username: process.env.APP_USERNAME || 'camille@yopmail.com',
  password: process.env.PASSWORD || 'cbsua123',
  welcomeBack: process.env.WELCOME_BACK || '',
};