import { Module } from '@nestjs/common';
import { ArticleRestController } from './article-rest.controller';
import { ArticleModule } from '../../domain/article/article.module';

@Module({
  controllers: [ArticleRestController],
  imports: [ArticleModule],
})
export class ArticleRestModule {}
