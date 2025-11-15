export class LoginPage {
    constructor(page){
        this.emailInput = page.locator('input[name=email]');
        this.passwordInput = page.locator('input[name=password]');
        this.loginButton = page.locator('.btn.btn-lg.btn-primary.pull-xs-right');

    }
    async authorization(user, password){
        const {email} = user;
        const {pass} = password;
        await this.emailInput.fill(email);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
}