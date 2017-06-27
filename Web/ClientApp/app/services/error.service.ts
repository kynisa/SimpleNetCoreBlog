import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ErrorService {
    errorSubject = new Subject<string>();

    sendError(error: string) {
        this.errorSubject.next(error);
    }

    getError(): Observable<string> {
        return this.errorSubject.asObservable();
    }
}
