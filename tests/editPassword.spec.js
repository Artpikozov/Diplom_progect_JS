import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import {MainPage, RegisterPage, SettingsPage, LoginPage } from '../src/page/index';
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


        const reqisterPage = new RegisterPage(page);
        const mainPage = new MainPage(page)
        const settingPage = new SettingsPage(page)
        const loginPage = new LoginPage(page)


        await mainPage.gotoRegister()
        await reqisterPage.Register(user);
        await mainPage.gotoSettings()
        await settingPage.editPassword(password)
        await mainPage.logOut()
        await mainPage.gotoLogin()
        await loginPage.authorization(user, password);
        await expect(mainPage.dropDownUser).toContainText(user.name);

    });
});
