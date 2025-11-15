import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import {App} from '../src/page/appPage';
const URL =  'https://realworld.qa.guru/';

test.describe('изменение пароля', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });

    test("Изменение пароля", async ({ page }) => {

        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }
        const password = {
            pass: faker.internet.password(),
        }


        let app = new App(page);



        await app.main.gotoRegister()
        await app.register.Register(user)
        await app.main.gotoSettings()
        await app.settings.editPassword(password)
        await app.main.logOut()
        await app.main.gotoLogin()
        await app.login.authorization(user, password);
        await expect(app.main.dropDownUser).toContainText(user.name);

    });
});
