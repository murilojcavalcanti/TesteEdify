import { Injectable } from '@nestjs/common';
import { AddBookDto } from './dto/Add-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ){}

  AddBook(AddBookDto: AddBookDto) {
    const book = this.bookRepository.create(AddBookDto)
    return this.bookRepository.save(book);
  }
  
  async FindAllBooks(){
    return this.bookRepository.find({ order: { startedAt:'DESC' }});
  }

  async findOne(booksId: string) {
    return await this.bookRepository.findBy({booksId})
  }

  update(id: number, {startedAt,endedAt,score,review}: UpdateBookDto) {

    const data:any= []
    if(startedAt) data.startedAt = startedAt
    if(endedAt) data.endedAt = endedAt
    if(score) data.score = score
    if(review) data.review = review
    
    return this.bookRepository.update(id,data)
  }

   remove(id: number) {
    return this.bookRepository.delete(id)
  }
}
