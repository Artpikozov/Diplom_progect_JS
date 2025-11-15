import { test } from "@playwright/test";

//const r = await request.post(`${testInfo.project.use.apiURL}/challenger`);
import {request} from "node:http";
import playwrightConfig from "../../playwright.config";

export class ChallengerService {
    constructor(request, baseURL) {
        this.request = request;
        this.baseURL = baseURL;
    }

    async post(data) {
        return test.step('post', async () => {
            const response = await this.request.post(`${this.baseURL}/challenger`);
            return response;
        })
    }
}