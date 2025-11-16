export class LoginPage {
    constructor(page){
        this.emailInput = page.locator('input[name=email]');
        this.passwordInput = page.locator('input[name=password]');
        this.loginButton = page.locator('.btn.btn-lg.btn-primary.pull-xs-right');

    }
    async authorization(user, settingsBuilder){
        const {email} = user;
        const {editPassword} = settingsBuilder;
        await this.emailInput.fill(email);
        await this.passwordInput.fill(editPassword);
        await this.loginButton.click();
    }
}