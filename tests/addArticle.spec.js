import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {MainPage, RegisterPage, AddArticlePage, ArticlePage } from '../src/page/index';
const URL =  'https://realworld.qa.guru/';

test.describe('статья', () => {
    test.beforeEach( async ({ page }) => {
        await page.goto(URL);
    });
    test("Добавление новой статьи ", async ({ page }) => {

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

        const reqisterPage = new RegisterPage(page);
        const mainPage = new MainPage(page)
        const addArticlePage = new AddArticlePage(page)
        const articlePage = new ArticlePage(page)


        await mainPage.gotoRegister()
        await reqisterPage.Register(user);
        await mainPage.gotoArtcle();
        await addArticlePage.addArticle(articleAttribute);
        await expect(articlePage.banner).toContainText(articleAttribute.title);
    });
});