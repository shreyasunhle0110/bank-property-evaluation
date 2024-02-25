import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ReferenceService {
    private counter = 1;

    constructor() { }

    generateReference(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const reference = `${year}/${month}/${String(this.counter).padStart(4, '0')}`;
        this.counter++;
        return reference;
    }
}
