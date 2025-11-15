export class RegisterPage {

    constructor(page) {
        this.loginLink = page.locator('[name="username"]');
        this.emailInput = page.locator('[name="email"]');
        this.passwordInput = page.locator('[name="password"]');
        this.signUpButton1 = page.locator('.btn.btn-lg.btn-primary.pull-xs-right');

    }

    async Register(user){
        const {name, email, password} = user;
        await this.loginLink.fill(name);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signUpButton1.click();
    }
}