import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post, Comment } from '../app.models';
import { ErrorService } from './error.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogService extends ApiService {
    readonly endpoint = "/api/blog/posts";

    constructor(error: ErrorService, private http: Http) {
        super(error);
    }

    getPosts(offset: Number, limit: Number): Observable<Post[]> {
        return this.call(() => this.http.get(this.endpoint, this.pagingParams(offset, limit)));
    }

    getPost(postId: Number): Observable<Post> {
        return this.call(() => this.http.get(this.endpoint + '/' + postId));
    }

    getComments(postId: Number, offset: Number, limit: Number): Observable<Comment[]> {
        return this.call(() => this.http.get(this.endpoint + '/' + postId + '/comments', this.pagingParams(offset, limit)));
    }

    postComment(postId: Number, comment: Comment): Observable<Comment> {
        comment.postId = postId;
        return this.call(() => this.http.post(this.endpoint + '/' + postId + '/comments', comment));
    }
}
