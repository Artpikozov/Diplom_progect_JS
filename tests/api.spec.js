import { test, expect } from "@playwright/test";
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
       console.log(testInfo.project.use.apiURL);
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
