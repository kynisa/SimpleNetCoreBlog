import { URLSearchParams } from '@angular/http';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export abstract class ApiService {
    
    constructor(private error: ErrorService) { }

    call(request: Function): any {
        return request()
            .map(response => response.json())
            .catch(error => {
                let message = error.json().message || 'Unknown server error.';
                this.error.sendError(message);
                return Observable.throw(new Error(message));
        });       
    }

    pagingParams(offset: Number, limit: Number): Object {
        let params = new URLSearchParams();
        params.set('offset', offset.toString());
        params.set('limit', limit.toString());
        return { search: params };
    }
}
