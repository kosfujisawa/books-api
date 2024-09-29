import { Module, ModuleMetadata } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { IAuthModuleOptions, PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    } as IAuthModuleOptions),
  ],
  controllers: [BooksController],
  providers: [BooksService],
} as ModuleMetadata)
export class BooksModule {}
