import { Article } from './article';
import { UUID } from '../uuid';

export abstract class ArticleRepository {
  abstract getAll(): Promise<Article[]>;

  abstract getByID(id: UUID): Promise<Article>;

  abstract create(article: Article): Promise<Article>;
}
