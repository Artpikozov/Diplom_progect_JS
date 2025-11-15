import {ArticlePage} from "./index";

export class AddArticlePage {
    constructor(page) {
        this.articleTitle = page.locator('.form-control.form-control-lg[name="title"]');
        this.description = page.locator('.form-control[name="description"]');
        this.bodyArticle = page.locator('.form-control[name="body"]');
        this.tags = page.locator('.form-control[name="tags"]');
        this.publishButton = page.locator('.btn.btn-lg.pull-xs-right.btn-primary');




    }

    async addArticle(articleAttribute){
        const {title, description, body, tags} = articleAttribute;
        await this.articleTitle.fill(title);
        await this.description.fill(description);
        await this.bodyArticle.fill(body);
        await this.tags.fill(tags);
        await this.publishButton.click();
    }
    async editArticle(editArticleAttribute) {
        const {title, description, body, tags} = editArticleAttribute;
        await this.articleTitle.fill(title);
        await this.description.fill(description);
        await this.bodyArticle.fill(body);
        await this.tags.fill(tags);
        await this.publishButton.click();
    }

}