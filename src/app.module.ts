import { Module, ModuleMetadata } from '@nestjs/common';
import { DynamooseModule, DynamooseModuleOptions } from 'nestjs-dynamoose';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    BooksModule,
    DynamooseModule.forRoot({
      aws: {
        accessKeyId: 'dummy',
        secretAccessKey: 'dummy',
        region: 'ap-southeast-2',
      } as DynamooseModuleOptions['aws'],
      local: true,
    } as DynamooseModuleOptions),
  ],
} as ModuleMetadata)
export class AppModule {}
