import { Injectable } from '@angular/core';
import * as store from 'store2';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    set(key: string, data: any): void {
        store.set(key, data, true);
    }

    has(key: any): boolean {
        return store.has(key);
    }

    get(key: any): any | null {
        return store.get(key) as string;
    }

    delete(key: any): void {
        store.remove(key);
    }
}
