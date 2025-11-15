import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {App} from '../src/page/appPage';
const URL =  'https://realworld.qa.guru/';

test.describe('Артикул', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });

    test("Изменение статьи", async ({ page }) => {

        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }
        const articleAttribute = {
            title: faker.lorem.words(3),
            description: faker.lorem.sentence(),
            body: faker.lorem.paragraph(2),
            tags: faker.lorem.sentence(),
        }
        const editArticleAttribute = {
            title: faker.lorem.words(3),
            description: faker.lorem.sentence(),
            body: faker.lorem.paragraph(2),
            tags: faker.lorem.sentence(),

        }

        let app = new App(page);


        await app.main.gotoRegister()
        await app.register.Register(user);
        await app.main.gotoArtcle();
        await app.addArticle.addArticle(articleAttribute);
        await app.article.gotoEditArticle();
        await app.addArticle.editArticle(editArticleAttribute);
        await expect(app.article.banner).toContainText(editArticleAttribute.title);

    });
});