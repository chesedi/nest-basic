import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestService } from 'src/test/test.service';
import { Photo } from './domain/Photo';
import { User } from './domain/User';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  imports: [TypeOrmModule.forFeature([User, Photo])],
  controllers: [UserController],
  providers: [UserService, TestService],
})
export class UserModule {}
