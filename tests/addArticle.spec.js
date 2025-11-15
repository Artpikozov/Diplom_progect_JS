import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {App} from '../src/page/appPage';
import {articlesAttributeBuilder, UserBuilder} from '../src/helpers/index';
const URL =  'https://realworld.qa.guru/';


test.describe('статья', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });
    test("Добавление новой статьи ", async ({ page }) => {

        const articlesAttribute = new articlesAttributeBuilder()
            .Title()
            .Description()
            .Body()
            .Tags()
            .generate();



        const user = new UserBuilder()
            .Name()
            .Email()
            .Password()
            .generate();


        let app = new App(page);


        await app.main.gotoRegister()
        await app.register.Register(user);
        await app.main.gotoArtcle();
        await app.addArticle.addArticle(articlesAttribute);
        await expect(app.article.banner).toContainText(articlesAttribute.title);
    });
});