import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MessageInfo } from '../interface';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new BehaviorSubject<MessageInfo | null>(null);

    sendMessage(type: 'PropertyDetails' | 'Comments' | 'BorrowerForm' | 'FileUpload', data: any) {
        this.subject.next({ type, data });
    }

    clearMessages() {
        this.subject.next(null);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}