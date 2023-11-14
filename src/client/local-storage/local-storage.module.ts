import { Global, Module } from '@nestjs/common';
import { Storage } from '../../domain/article/storage';
import { LocalStorage } from './local-storage';

// using Global for dependency inversion
@Global()
@Module({
  providers: [
    {
      provide: Storage,
      useClass: LocalStorage,
    },
  ],
  exports: [Storage],
})
export class LocalStorageModule {}
