import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {App} from '../src/page/appPage';
import {articlesAttributeBuilder, UserBuilder} from '../src/helpers/index';
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


        const COMMENT = {
            text: faker.lorem.sentences()
        }

        let app = new App(page);



        await app.main.gotoRegister()
        await app.register.Register(user);
        await app.main.gotoArtcle();
        await app.addArticle.addArticle(articleAttribute);
        await app.article.addComment(COMMENT);
        await expect(app.article.cardText).toContainText(COMMENT.text)
        //await expect(articlePage.cardText).toContainText(COMMENT.comment)

    });
});