import { test, expect } from "@playwright/test";
import { ChallengerService } from "../src/services/index";

const URL = "https://apichallenges.eviltester.com";
let token;

test.describe("Challenge", () => {
    // Добавь testInfo как параметр
    test.beforeEach(async ({request}, testInfo) => {
        const r = await request.post(`${testInfo.project.use.apiURL}/challenger`);
        const headers = r.headers();
        console.log(`${testInfo.project.use.apiURL}${headers.location}`);
        token = headers["X-CHALLENGER"];
    })

    test("Получить токен", async ({request}, testInfo) => {
        console.log(`${testInfo.project.use.apiURL}/challenger`);
        const r = await request.post(`${testInfo.project.use.apiURL}/challenger`);
        const headers = r.headers();
        const token = headers["X-CHALLENGER"];
        console.log(`${testInfo.project.use.apiURL}${headers.location}`);
        const resp = await request.get(`${testInfo.project.use.apiURL}/challenger`,{
            headers: {"X-CHALLENGER": token } });
        console.log(resp);
        expect(r.status()).toBe(201);
    });
});

test.describe("Challenge with service pattern", () => {
    test.only("Получить токен", async ({request}, testInfo) => {
        const baseURL = testInfo.project.use.apiURL;
        const challenger = new ChallengerService(request, baseURL);

        const response = await challenger.post();
        const headers = response.headers();

        console.log(`${baseURL}${headers.location}`);
        token = headers["X-CHALLENGER"];
        console.log(token);

        expect(response.status()).toBe(201);
    });
});







/*import { test, expect } from "@playwright/test";
import { ChallengerService } from "../src/services/index";
import {request} from "node:http";
const URL = "https://apichallenges.eviltester.com";
let token;
test.describe("Challenge", () => {
    test.beforeEach(async ({request}, testInfo) => {
        const r = await request.post(`${testInfo.project.use.apiURL}/challenger`);
        const headers = r.headers();
        console.log(`${testInfo.project.use.apiURL}${headers.location}`);
        token = headers["X-CHALLENGER"];
    })
    test("Получить токен", async ({request},testInfo) => {
       console.log(`${testInfo.config.project.use.apiURL}/challengers`);
        const r = await request.post(`${testInfo.project.use.apiURL}/challenger`);
        const headers = r.headers();
        const token = headers["X-CHALLENGER"];
        console.log(`${testInfo.project.use.apiURL}${headers.location}`);
        const resp = await request.get(`${testInfo.project.use.apiURL}/challenger`,{
            headers: {"X-CHALLENGER": token } });
        console.log(resp);
        expect(r.status()).toBe(201);

       // const resp = await request.post(`${URL}/challenges`);

    });
});
test.describe("Challenge with service pattern", () => {
    test.only("Получить токен", async ({request},testInfo) => {
      const challenger = new ChallengerService(request);
      //const r = await request.post(`${testInfo.project.use.apiURL}/challenger`);
      const resp = await challenger.post();
      const headers = await r.headers();
      console.log(`${testInfo.project.use.apiURL}${headers.location}`);
      token = headers["X-CHALLENGER"];
      console.log(token);

       // const r = await request.get(`${testInfo.project.use.apiURL}/challenger`, {
       //     headers: {"X-CHALLENGER": token}
       // });
       // const body = await r.json();
      //  expect(body.challeges.length).toBe(59);
    });
});
*/

