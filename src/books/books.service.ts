import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookModel } from './book.model';
import { v4 } from 'uuid';
import { ScanResponse } from 'nestjs-dynamoose';

@Injectable()
export class BooksService {
  async create({
    title,
    author,
    publishedDate,
    description,
  }: CreateBookDto): Promise<Book> {
    return await BookModel.create({
      id: v4(),
      title,
      author,
      publishedDate: new Date(publishedDate),
      description,
    } as Book);
  }

  async findAll(): Promise<ScanResponse<Book>> {
    return await BookModel.scan().exec();
  }

  async findOne(id: string): Promise<Book> {
    const found: Book = await BookModel.get(id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async update(
    id: string,
    { title, author, publishedDate, description }: UpdateBookDto,
  ): Promise<Book> {
    const found: Book = await this.findOne(id);

    return await BookModel.update(id, {
      title: title ?? found.title,
      author: author ?? found.author,
      publishedDate: publishedDate
        ? new Date(publishedDate)
        : found.publishedDate,
      description: description ?? found.description,
    } as Book);
  }

  async delete(id: string): Promise<Book> {
    const found: Book = await this.findOne(id);
    await BookModel.delete(id);
    return found;
  }
}
