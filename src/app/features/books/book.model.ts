import { BookSpecification } from '../../shared/book-specification.model';

export class Book {
    public name: string;
    public description: string;
    public imagePath: string;
    public bookSpecification: BookSpecification[];

    constructor(name: string, desc: string, imagePath: string, bookSpecification: BookSpecification[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.bookSpecification = bookSpecification;
    }

}
