import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {App} from '../src/page/appPage';
import {articlesAttributeBuilder, UserBuilder, articlesBuilder} from '../src/helpers/index';
const URL =  'https://realworld.qa.guru/';

test.describe('Комментарий', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });

    test("Добавление комментария ", async ({ page }) => {

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

        const ArticlesBuilder = new articlesBuilder()
            .articleComment()
            .generate();


        let app = new App(page);



        await app.main.gotoRegister()
        await app.register.Register(user);
        await app.main.gotoArtcle();
        await app.addArticle.addArticle(articlesAttribute);
        await app.article.addComment(ArticlesBuilder);
        await expect(app.article.cardText).toContainText(ArticlesBuilder.comment)

    });
});