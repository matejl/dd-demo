import { Storage } from '../../domain/article/storage';
import * as fs from 'node:fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalStorage extends Storage {
  constructor() {
    super();
  }
  async store(fileName: string, content: string) {
    await fs.writeFile(
      `${process.cwd()}/files/article-${fileName}.txt`,
      content,
    );
  }
}
