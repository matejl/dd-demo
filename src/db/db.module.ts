import { Module } from '@nestjs/common';
import { ArticleRepository } from '../domain/article/article.repository';
import { ArticleDbRepository } from './article.db.repository';
import { UserRepository } from '../domain/user/user.repository';
import { UserDbRepository } from './user.db.repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    { provide: ArticleRepository, useClass: ArticleDbRepository },
    { provide: UserRepository, useClass: UserDbRepository },
    PrismaService,
  ],
  exports: [ArticleRepository, UserRepository],
})
export class DbModule {}
