import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  create(book: {
    title: string;
    author?: string;
  }): Promise<{ message: string }> {
    return this.booksRepository
      .save(book)
      .then(() => ({ message: 'Book created successfully' }))
      .catch(() => ({ message: 'Error creating book' }));
  }

  findAll() {
    return this.booksRepository.find();
  }

  findOne(id: number) {
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
