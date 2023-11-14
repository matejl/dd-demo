import { IsDefined } from 'class-validator';

export class CreateArticleReqDto {
  @IsDefined()
  public readonly title: string;
  @IsDefined()
  public readonly summary: string;
  @IsDefined()
  public readonly content: string;

  constructor(
    title: string,
    summary: string,
    content: string,
  ) {
    this.title = title;
    this.summary = summary;
    this.content = content;
  }
}
