import { Module } from '@nestjs/common';
import { DbModule } from '../../db/db.module';
import { ArticleService } from './article.service';

@Module({
  providers: [ArticleService],
  exports: [ArticleService],
  imports: [DbModule],
})
export class ArticleModule {}
