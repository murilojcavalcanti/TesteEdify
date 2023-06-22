import { PartialType } from '@nestjs/mapped-types';
import { AddBookDto } from './Add-book.dto';

export class UpdateBookDto extends PartialType(AddBookDto) {
    
endedAt: Date

review:string

}
