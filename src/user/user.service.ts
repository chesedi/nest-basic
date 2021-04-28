import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [
    new UserDto('lee1', '이정주'),
    new UserDto('kim1', '김명일'),
  ];

  findAll(): Promise<UserDto[]> {
    return new Promise((resolve) => setTimeout(() => resolve(this.users), 100));
  }

  findOne(id: string): UserDto {
    const foundOne = this.users.filter((user) => user.userId === id);
    return foundOne[0];
  }

  saveUser(userDto: UserDto): void {
    this.users = [...this.users, userDto];
  }
}
