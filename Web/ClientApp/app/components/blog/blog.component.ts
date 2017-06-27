import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { PagingComponent } from '../paging.component';
import { Post } from '../../app.models';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    providers: [BlogService]
})
export class BlogComponent extends PagingComponent implements OnInit {
    posts: Array<Post>;

    constructor(private blog: BlogService) {
        super();       
    }

    init() {
        this.limit = 3;
        this.offset = 0;
        this.posts = new Array<Post>();
        this.getItems = () => this.blog.getPosts(this.offset, this.limit);
    }

    ngOnInit() {
        this.init();
        this.loadItems();
    }

    onNewItemsAdded(items: any) {
        this.posts.push(...items);
    }

    onNewItemsMissing() { }
}

