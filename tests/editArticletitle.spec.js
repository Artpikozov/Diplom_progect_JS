import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {App} from '../src/page/appPage';
import {articlesAttributeBuilder, UserBuilder, EditArticle} from "../src/helpers";
const URL =  'https://realworld.qa.guru/';

test.describe('Артикул', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });

    test("Изменение статьи", async ({ page }) => {

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

        const editArticle  = new EditArticle()
            .editTitle()
            .editDescription()
            .editBody()
            .editTags();


        let app = new App(page);


        await app.main.gotoRegister()
        await app.register.Register(user);
        await app.main.gotoArtcle();
        await app.addArticle.addArticle(articlesAttribute);
        await app.article.gotoEditArticle();
        await app.addArticle.editArticle(editArticle);
        await expect(app.article.banner).toContainText(editArticle.title);

    });
});