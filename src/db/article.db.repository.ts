import { ArticleRepository } from '../domain/article/article.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Article } from '../domain/article/article';
import { UUID } from '../domain/uuid';
import { ArticleMapper } from './mapper/article.mapper';

@Injectable()
export class ArticleDbRepository extends ArticleRepository {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async create(article: Article): Promise<Article> {
    const created = await this.prismaService.article.create({
      data: {
        created_at: new Date(),
        title: article.title,
        summary: article.summary,
        content: article.content,
        user: {
          connect: {
            id: article.author.id.toString(),
          },
        },
      },
      include: {
        user: true,
      },
    });
    return ArticleMapper.toDomain(created);
  }

  async getAll(): Promise<Article[]> {
    return (await this.prismaService.article.findMany()).map((it) =>
      ArticleMapper.toDomain(it),
    );
  }

  async getByID(id: UUID): Promise<Article> {
    const article = await this.prismaService.article.findFirst({
      where: {
        id: id.toString(),
      },
    });
    return ArticleMapper.toDomain(article);
  }
}
