import { faker } from '@faker-js/faker';

export class SettingsBuilder {
    editPassword() {
        this.editPassword = faker.internet.password()
        return this;
    }
    generate() {
        // Деструктуризация убивает неиспользуемые поля
        return {...this};
    }

}