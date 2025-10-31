import { test } from "@playwright/test";

//const r = await request.post(`${testInfo.project.use.apiURL}/challenger`);
import {request} from "node:http";
import playwrightConfig from "../../playwright.config";

export class ChallengerService {
    constructor(request) {
        this.request = request;
    }

    async post(data, testInfo) {
        return test.step('post', async () => {
            const response = await request.post(`${testInfo.project.use.apiURL}/challenger`);
            return response;
        })
    }
}