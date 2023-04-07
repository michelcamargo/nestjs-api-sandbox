import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { ArticlesModule } from '../articles/articles.module';
import { LoggerMiddleware } from '../common/middleware/logger.middleware';
import { ArticlesController } from '../articles/articles.controller';

@Module({
  imports: [PrismaModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes({ path: 'private', method: RequestMethod.GET });
      // .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
      .exclude(
        { path: 'public', method: RequestMethod.GET },
        { path: 'public', method: RequestMethod.POST },
        'private/(.*)',
      )
      .forRoutes(ArticlesController);
  }
}
