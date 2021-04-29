import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TestModule } from './test/test.module';
import { LoggerMiddleware } from './middleware/LoggerMiddleware';
import { ExceptionController } from './exception/exception.controller';
@Module({
  imports: [UserModule, TestModule],
  controllers: [AppController, ExceptionController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'user/list', method: RequestMethod.GET })
      .forRoutes('user');
  }
}
