import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { TestService } from 'src/test/test.service';

@Controller('user')
export class UserController {
  // 의존성(Dependency) 주입
  constructor(
    private userSerivce: UserService,
    private testService: TestService,
  ) {
    this.userSerivce = userSerivce;
    this.testService = testService;
  }

  @Get('test')
  findAnotherTest(): string {
    return this.testService.getInfo();
  }

  @Get('list')
  findAll(): Promise<any[]> {
    return this.userSerivce.findAll();
  }

  @Get(':userId')
  findOne(@Param('userId') id: string): any {
    return this.userSerivce.findOne(id);
  }

  @Post()
  saveUser(@Body() userDto: UserDto): string {
    this.userSerivce.saveUser(userDto);
    return Object.assign({
      data: { ...userDto },
      statusCode: 201,
      statusMsg: `created successfully`,
    });
  }
}
