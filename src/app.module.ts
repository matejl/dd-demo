import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRestModule } from './rest/user/user-rest.module';
import { ArticleRestModule } from './rest/article/article-rest.module';
import { LocalStorageModule } from './client/local-storage/local-storage.module';

@Module({
  imports: [UserRestModule, ArticleRestModule, LocalStorageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
