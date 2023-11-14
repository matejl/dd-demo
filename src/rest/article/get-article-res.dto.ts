import { UUID } from '../../domain/uuid';

export class GetArticleResDto {
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly authorId: string;
  public readonly title: string;
  public readonly summary: string;
  public readonly content: string;

  constructor(
    id: string,
    createdAt: Date,
    authorId: string,
    title: string,
    summary: string,
    content: string,
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.authorId = authorId;
    this.title = title;
    this.summary = summary;
    this.content = content;
  }
}
