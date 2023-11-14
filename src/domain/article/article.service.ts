import { ArticleRepository } from './article.repository';
import { Article } from './article';
import { UUID } from '../uuid';
import { Storage } from './storage';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  constructor(
    private readonly articleRepository: ArticleRepository,
    private readonly storage: Storage,
  ) {}

  getAll(): Promise<Article[]> {
    return this.articleRepository.getAll();
  }

  getByID(id: UUID): Promise<Article> {
    return this.articleRepository.getByID(id);
  }

  async create(article: Article): Promise<Article> {
    const created = await this.articleRepository.create(article);
    await this.storage.store(
      this.createArticleFileName(created),
      created.printableVersion,
    );
    return created;
  }

  private createArticleFileName(article: Article): string {
    return `${article.id}_${article.title}.txt`;
  }
}
