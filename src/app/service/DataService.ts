import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private apiUrl = 'http://localhost:9092/api/rowdata';

    constructor(private http: HttpClient) { }

    getRowData(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
