export class SettingsPage{
    constructor(page){
        this.password = page.locator('[name="password"]');
        this.upDateSettingsButtom = page.locator('.btn.btn-lg.btn-primary.pull-xs-right');
        this.userName = page.locator('[name="username"]');

    }

    async editPassword(settingsBuilder){
        const {editPassword} = settingsBuilder;
        await this.password.fill(editPassword)
        await this.upDateSettingsButtom.click();
    }
    async editUserName(settings){
        const {name} = settings;
        await this.userName.fill(name);
        await this.upDateSettingsButtom.click();
    }

}