import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type:'mysql',
      database:'db_teste_edify',
      port:3306,
      username:'root',
      password:'Cav@lcanti32',
      entities:[Book],
      synchronize:true,
    }),BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
