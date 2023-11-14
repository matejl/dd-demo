import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class Storage {
  abstract store(fileName: string, content: string): void;
}
