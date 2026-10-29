import {type test as helper, type Page, expect, request} from '@playwright/test';
import { systemWordlist, mimeTypes } from '../data/wordlist';
import fs from 'fs';
import fsPromises from 'fs/promises';

export class APIHelper {
    constructor(protected page: Page) {}

    async getAPIResponse(base: string, endpoint: string) {
        const raw = await fsPromises.readFile('../data/auth.json', 'utf8');
        const cookie = JSON.parse(raw);
        const tokenCookie = cookie.cookies.find((c: { name: string }) => c.name === 'auth:token');
        const token = tokenCookie.value;
        const response = await this.page.request.get(`${base}${endpoint}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        await expect(response.ok()).toBeTruthy();
        return response.json();
    }

    async getAPIbyTriggers(endpoint: string) {
        const response = await this.page.waitForResponse(
            res => res.url().includes(endpoint),
        );
        expect(response.ok()).toBeTruthy();
        return await response.json();
    }
    async getValidateAPI(endpoint: string) {
        const response = await this.page.waitForResponse(
            res => res.url().includes(endpoint),
        );
        expect(response.ok()).toBeTruthy();
    }
    async n8nAPISlackImg(webhook: string, message: string, screenshot: Buffer){
        const request =  await this.page.request.get(webhook.trim(), {
            multipart: {
                message: message,
                image: {
                    name: 'photo.png',
                    mimeType: 'image/png',
                    buffer: screenshot
                }
            }
        });
        console.log(Buffer.isBuffer(screenshot));
        console.log(screenshot.constructor.name);
        console.log(request)
        return request
    }
    async n8nAPISlackText(webhook: string, message: string){
       const n8nResponse = await this.page.request.get(
            webhook,
            {
                data: {
                    fullResponse: message
                }
            }
        );
        return n8nResponse

    }
}
