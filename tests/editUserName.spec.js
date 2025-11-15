import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import {App} from '../src/page/appPage';
const URL =  'https://realworld.qa.guru/';

test.describe('изменение имени', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });

    test("Изменение Имени пользователя", async ({ page }) => {

        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }
        const editSettings = {
            name: faker.person.fullName()
        }

        let app = new App(page);

        await app.main.gotoRegister()
        await app.register.Register(user);
        await app.main.gotoSettings()
        await app.settings.editUserName(editSettings);
        await expect(app.main.dropDownButton).toContainText(editSettings.name);



    });
});
