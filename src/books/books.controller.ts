import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  create(
    @Body() book: { title: string; author: string; publicationDate: string },
  ) {
    return this.booksService.create(book);
  }
  @Get()
  findAll() {
    return this.booksService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.booksService.findOne(id);
  }
  @Put(':id')
  update(@Body() id: number, @Body() book: Partial<Book>) {
    return this.booksService.update(id, book);
  }
  @Delete(':id')
  remove(@Body() id: number) {
    return this.booksService.remove(id);
  }
}
