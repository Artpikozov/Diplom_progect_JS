import { faker } from '@faker-js/faker';

export class articlesAttributeBuilder {
    Title() {
        this.title = faker.lorem.words(3);
        return this;
    }

    Description() {
        this.description = faker.lorem.sentence();
        return this;
    }

    Body() {
        this.body = faker.lorem.paragraph(2);
        return this;
    }

    Tags() {
        this.tags = faker.internet.password();
        return this;
    }

    generate() {
        // Деструктуризация убивает неиспользуемые поля
        return {...this};
    }

}
