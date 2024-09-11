import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { ValidationPipe } from '@nestjs/common';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body(new ValidationPipe()) createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }
  @Get()
  findAll() {
    return this.booksService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    if (!id) {
      return {
        message: 'Book not found',
      };
    }
    return this.booksService.findOne(+id);
  }
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateBookDto: UpdateBookDto,
  ) {
    const updatedBook = {
      ...updateBookDto,
      publicationDate: new Date(updateBookDto.publicationDate),
    };
    return this.booksService.update(+id, updatedBook);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Body() id: number) {
    return this.booksService.remove(id);
  }
}
