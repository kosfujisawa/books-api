import { model } from 'dynamoose';
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

export const BookSchemaDef: SchemaDefinition = {
  id: {
    type: String,
    hashKey: true,
  },
  title: { type: String },
  author: { type: String },
  publishedDate: { type: Date },
  description: { type: String },
} as SchemaDefinition;

export const BookModel: ModelType<Book> = model('Books', BookSchemaDef);
