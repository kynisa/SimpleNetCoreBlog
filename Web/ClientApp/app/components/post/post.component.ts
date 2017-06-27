import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { PagingComponent } from '../paging.component';
import { Post, Comment } from '../../app.models';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [BlogService]
})
export class PostComponent extends PagingComponent implements OnInit {
    post: Post;
    comments: Array<Comment>;
    addCommentVisible: Boolean;
    newComment: Comment;

    constructor(private route: ActivatedRoute, private blog: BlogService) {
        super();
    }

    init() {
        this.limit = 5;
        this.offset = 0;
        this.post = new Post();
        this.comments = new Array<Comment>();
        this.addCommentVisible = false;
        this.newComment = new Comment();
        this.getItems = () => this.blog.getComments(this.post.id, this.offset, this.limit);
    }

    ngOnInit() {       
        this.route.params.subscribe((params: Params) => {
            this.init();
            let id = +params['id'];
            this.blog.getPost(id).subscribe(post => {
                this.post = post;
                this.loadItems();
            });      
        });
    }

    onNewItemsAdded(items: any) {
        this.comments.push(...items);
    }

    onNewItemsMissing() {
        this.addCommentVisible = true;
    }

    addComment() {
        this.blog.postComment(this.post.id, this.newComment).subscribe(comment => {
            this.comments.push(comment);
            this.post.commmentsCount++;
            this.newComment = new Comment();
        });      
    }
}