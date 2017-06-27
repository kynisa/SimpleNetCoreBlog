import { HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export abstract class PagingComponent {
    limit: number;
    offset: number;
    getItems: Function;

    @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
        let pos = document.body.scrollTop + document.documentElement.clientHeight;
        let max = document.documentElement.scrollHeight;
        if (pos == max && this.offset != -1) {
            this.loadItems();
        }
    }

    loadItems() {
        this.getItems.call(null).subscribe(items => {
            if (items.length == 0) {
                this.offset = -1;
                this.onNewItemsMissing();
            } else {
                this.onNewItemsAdded(items);
                this.offset += this.limit;
            }
        });
    }

    abstract onNewItemsAdded(items: any);
    abstract onNewItemsMissing();
}
