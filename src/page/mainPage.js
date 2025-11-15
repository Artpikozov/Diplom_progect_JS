export class MainPage{
    constructor(page) {
        this.signUpButton = page.getByRole('link',{name: 'Sign up'});
        this.dropDownUser = page.locator('.nav-link.dropdown-toggle.cursor-pointer');
        this.newArticle = page.getByRole('link',{name: 'New Article'});
        this.dropDownButton = page.locator('.nav-link.dropdown-toggle.cursor-pointer');
        this.settingsButton = page.getByRole('link',{name: 'Settings'});
        this.logOutButton = page.getByRole('link',{name: 'Logout'});
        this.loginButton = page.getByRole('link',{name: 'Login'});
        this.popularTagsButton = page.getByRole('.tag-pill tag-default').first();



    }

    async gotoRegister(){
        await  this.signUpButton.click();
    }
    async gotoArtcle(){
        await this.newArticle.click();
    }
    async gotoSettings(){
        await this.dropDownUser.click();
        await this.settingsButton.click();
    }
    async logOut(){
        await this.dropDownButton.click();
        await this.logOutButton.click();
    }
    async gotoLogin(){
        await this.loginButton.click();

    }

}
