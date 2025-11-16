export class ArticlePage {
    constructor(page) {
        this.banner = page.locator('.banner');
        this.deliteArticleButton = page.getByRole('button',{name: "Delete Article"});
        this.editArticleButtonBanner = page.getByRole('button',{name: "Edit Article"}).first();
        this.editArticleButtonActios = page.getByRole('button',{name: "Edit Article"}).nth(1);
        this.commentInput = page.getByRole('textbox',{name: "Write a comment..."});
        this.cardText = page.locator('.card-text');
        this.postcommentButton = page.getByRole('button',{name: "Post comment"});
    }
    async addComment(articlesBuilder){
        const {comment} = articlesBuilder
        await this.commentInput.fill(comment);
        await this.postcommentButton.click();

    }
    async gotoEditArticle(){
        await this.editArticleButtonActios.click();
    }

}