import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';
import { FechAdapter } from './adapters/fetch.adapter';

@Module({

        providers: [AxiosAdapter,FechAdapter],
        exports: [AxiosAdapter,FechAdapter],

})
export class CommonModule {}
