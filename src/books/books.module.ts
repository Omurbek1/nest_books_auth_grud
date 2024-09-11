import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Book, User])],
  providers: [BooksService],
  controllers: [BooksController],
  exports: [BooksService],
})
export class BooksModule {}
