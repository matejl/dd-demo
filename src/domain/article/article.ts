import { User } from '../user/user';
import { UUID } from '../uuid';

export class Article {
  public readonly id: UUID;
  public readonly createdAt: Date;
  public readonly author: User;
  public readonly title: string;
  public readonly summary: string;
  public readonly content: string;

  constructor(
    id: UUID,
    createdAt: Date,
    author: User,
    title: string,
    summary: string,
    content: string,
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.author = author;
    this.title = title;
    this.summary = summary;
    this.content = content;
  }

  public get printableVersion(): string {
    return `Article ${this.id}, createdAt: ${this.createdAt.toISOString()}
    
    Author: ${this.author.firstName} ${this.author.lastName}
    
    ${this.title}
    ---
    
    ${this.summary}
    
    ${this.content}
    `;
  }
}
