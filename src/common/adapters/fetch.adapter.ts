import { Injectable } from '@nestjs/common';
import { HttpAdapter } from './../interfaces/http-adapter.interface';

@Injectable()
export class FechAdapter implements HttpAdapter {
   
    async get<T>(url: string): Promise<T> {
        try {
            const data:T = await fetch( url ).then(response => response.json());

            return data;

        } catch (error) {
            
            throw new Error('This is an error - Check logs');
        }

    }

}
