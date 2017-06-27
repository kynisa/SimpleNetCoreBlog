import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ErrorService } from '../../services/error.service';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ErrorService]
})
export class AppComponent implements OnDestroy {
    readonly currentYear: Number = new Date().getFullYear();   
    coverVisible: Boolean = false;
    showError: Subscription;
    hideError: Subscription;
    errors: Array<string> = new Array<string>();

    constructor(e: ErrorService, location: Location) {
        this.showError = e.getError().subscribe(error => {
            this.errors.push(error);
            this.hideError = Observable.timer(5000).subscribe(() => this.errors.pop());
        });
        var path = location.prepareExternalUrl(location.path());
        if (path == '/' || path == '/blog') {
            this.coverVisible = true;
        }
    }

    showHideCover() {
        this.coverVisible = !this.coverVisible;
    }

    hideCover() {
        this.coverVisible = false;
    }

    ngOnDestroy() {
        this.showError.unsubscribe();
        this.hideError.unsubscribe();
    }
}
