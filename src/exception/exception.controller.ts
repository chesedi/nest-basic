import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { AuthToken } from 'src/common/decorators/common.authToken';
import { HttpExceptionFilter } from 'src/exception/HttpExceptionFilter';

@Controller('except')
export class ExceptionController {
  @Get(':code')
  @UseFilters(new HttpExceptionFilter())
  executeError(@Param('code') code: HttpStatus) {
    if (code >= 200 && code < 400) {
      return 'status ok';
    } else if (code == 403) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Forbidden Error ',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  @Get('pipe/:id')
  exPipes(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `입력 받은 Number : ${id}`;
  }

  @Get('auth/token')
  getAuthToken(@AuthToken() token: string) {
    return `HEADER에 입력한 토근은 ${token} 입니다.`;
  }
}
