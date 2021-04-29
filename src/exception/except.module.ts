import { Module } from '@nestjs/common';
import { ExceptionController } from './except.controller';
@Module({
  imports: [],
  controllers: [ExceptionController],
  providers: [],
})
export class ExceptModule {}
