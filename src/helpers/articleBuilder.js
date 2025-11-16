import { faker } from '@faker-js/faker';

export class articlesBuilder {
    articleComment() {
        this.comment = faker.lorem.sentences()
        return this;
    }

    generate() {
        // Деструктуризация убивает неиспользуемые поля
        return {...this};
    }
}
export class EditArticle {
    editTitle() {
        this.title = faker.lorem.words(3);
        return this;
    }

    editDescription() {
        this.description = faker.lorem.sentence();
        return this;
    }

    editBody() {
        this.body = faker.lorem.paragraph(2);
        return this;
    }

    editTags() {
        this.tags = faker.lorem.sentence();
        return this;
    }

    generate() {
        // Деструктуризация убивает неиспользуемые поля
        return {...this};
    }

}
