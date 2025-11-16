import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import {App} from '../src/page/appPage';
import {SettingsBuilder, UserBuilder} from "../src/helpers";
const URL =  'https://realworld.qa.guru/';
test.describe('изменение пароля', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });

    test("Изменение пароля", async ({ page }) => {

        const user = new UserBuilder()
            .Name()
            .Email()
            .Password()
            .generate();

        const settingsBuilder = new SettingsBuilder()
            .editPassword()
            .generate()


        let app = new App(page);




        await app.main.gotoRegister()
        await app.register.Register(user)
        await app.main.gotoSettings()
        await app.settings.editPassword(settingsBuilder)
        await app.main.logOut()
        await app.main.gotoLogin()
        await app.login.authorization(user, settingsBuilder);
        await expect(app.main.dropDownUser).toContainText(user.name);

    });
});
