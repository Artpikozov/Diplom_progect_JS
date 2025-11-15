import { faker } from '@faker-js/faker';

export class UserBuilder {
    Email() {
        this.email = faker.internet.email();
        return this;
    }
    Name() {
        this.name = faker.person.fullName();
        return this;
    }
    Password() {
        this.password = faker.internet.password();
        return this;
    }
    generate() {
        // Деструктуризация убивает неиспользуемые поля
        return { ...this };
    }
}