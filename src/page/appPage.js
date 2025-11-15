import {ArticlePage, MainPage,
    RegisterPage, BasePage, SettingsPage, LoginPage,
    AddArticlePage} from './index'

export class App {
    constructor(page){
        this.page = page;
        this.main = new MainPage(page);
        this.register = new RegisterPage(page);
        this.basePage = new BasePage(page);
        this.article = new ArticlePage(page);
        this.login = new LoginPage(page);
        this.settings = new SettingsPage(page);
        this.base = new BasePage(page);
        this.addArticle = new AddArticlePage(page);
    }
}