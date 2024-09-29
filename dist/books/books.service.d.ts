import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './book.model';
import { ScanResponse } from 'nestjs-dynamoose';
export declare class BooksService {
    create({ title, author, publishedDate, description, }: CreateBookDto): Promise<Book>;
    findAll(): Promise<ScanResponse<Book>>;
    findOne(id: string): Promise<Book>;
    update(id: string, { title, author, publishedDate, description }: UpdateBookDto): Promise<Book>;
    delete(id: string): Promise<Book>;
}
