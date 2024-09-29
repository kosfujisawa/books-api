import { Item } from 'dynamoose/dist/Item';
import { SchemaDefinition } from 'dynamoose/dist/Schema';
import { ModelType } from 'dynamoose/dist/General';
export interface Book extends Item {
  id: string;
  title: string;
  author: string;
  publishedDate: Date;
  description: string;
}
export declare const BookSchemaDef: SchemaDefinition;
export declare const BookModel: ModelType<Book>;
