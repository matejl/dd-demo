import { User } from "../../domain/user/user";
import { GetArticleResDto } from "./get-article-res.dto";
import { Article } from "../../domain/article/article";
import { CreateArticleReqDto } from "./create-article-req.dto";
import { UUID } from "../../domain/uuid";

export class ArticleRestMapper {
  static fromDomain(article: Article): GetArticleResDto {
    return new GetArticleResDto(
      article.id.toString(),
      article.createdAt,
      article.author.id.toString(),
      article.title,
      article.summary,
      article.content,
    );
  }

  static toDomain(
    createArticleReqDto: CreateArticleReqDto,
    userId: string,
  ): Article {
    return new Article(
      null,
      null,
      new User(UUID.fromString(userId), null, null, null, null),
      createArticleReqDto.title,
      createArticleReqDto.summary,
      createArticleReqDto.content,
    );
  }
}
