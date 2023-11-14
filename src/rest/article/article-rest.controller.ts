import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ArticleService } from '../../domain/article/article.service';
import { GetArticleResDto } from './get-article-res.dto';
import { CreateArticleReqDto } from './create-article-req.dto';
import { ArticleRestMapper } from './article-rest.mapper';
import { UUID } from '../../domain/uuid';
import { Request } from 'express';
import { UserSessionDto } from '../user/user-session.dto';

@Controller('/articles')
export class ArticleRestController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async getAll(): Promise<GetArticleResDto[]> {
    return (await this.articleService.getAll()).map((it) =>
      ArticleRestMapper.fromDomain(it),
    );
  }

  @Get('/:id')
  async getByID(@Param('id') id: string): Promise<GetArticleResDto> {
    return ArticleRestMapper.fromDomain(
      await this.articleService.getByID(UUID.fromString(id)),
    );
  }

  @Post()
  async create(
    @Body() createArticleReqDto: CreateArticleReqDto,
    @Req() request: Request,
  ): Promise<GetArticleResDto> {
    return ArticleRestMapper.fromDomain(
      await this.articleService.create(
        ArticleRestMapper.toDomain(
          createArticleReqDto,
          (<UserSessionDto>(request.session as unknown)).userId,
        ),
      ),
    );
  }
}
