import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { BookService } from './book.service';
import { AddBookDto } from './dto/Add-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: AddBookDto) {
    return this.bookService.AddBook(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.FindAllBooks();
  }

  @Get(':booksId')
  findOne(@Param('booksId') booksId: string) {
    return this.bookService.findOne(booksId);
  }

  @Post(':id')
    update(@Param('id',ParseIntPipe) id: number, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
   return this.bookService.remove(id);
  }
}