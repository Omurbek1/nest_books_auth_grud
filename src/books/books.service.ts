import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto): Promise<{ message: string }> {
    const publicationDate = createBookDto.publicationDate
      ? new Date(createBookDto.publicationDate)
      : new Date();
    const newBook = this.booksRepository.create({
      ...createBookDto,
      publicationDate,
    });

    return this.booksRepository
      .save(newBook)
      .then(() => ({
        message: 'Book created successfully',
      }))
      .catch(() => ({ message: 'Error creating book' }));
  }

  findAll() {
    return this.booksRepository.find();
  }

  findOne(id: number) {
    if (!id) {
      return {
        message: 'Book not found',
      };
    }
    return this.booksRepository.findOne({ where: { id } });
  }

  update(id: number, book: Partial<Book>): Promise<{ message: string }> {
    return this.booksRepository
      .update(id, book)
      .then(() => ({ message: 'Book updated successfully' }))
      .catch(() => ({ message: 'Error updating book' }));
  }

  remove(id: number): Promise<{ message: string }> {
    return this.booksRepository
      .delete(id)
      .then(() => ({ message: 'Book deleted successfully' }))
      .catch(() => ({ message: 'Error deleting book' }));
  }
}
