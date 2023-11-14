import { Article } from '../../domain/article/article';
import { DateMapper } from './date.mapper';
import { UserMapper } from './user.mapper';
import { UUID } from '../../domain/uuid';

export class ArticleMapper {
  // todo :D
  static toDomain(article: any): Article {
    return new Article(
      UUID.fromString(article.id),
      DateMapper.toDomain(article.created_at),
      UserMapper.toDomain(article.user),
      article.title,
      article.summary,
      article.content,
    );
  }
}
