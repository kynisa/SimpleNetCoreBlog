import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component'
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';

import { SafeHtmlPipe } from './pipe.safehtml'

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        BlogComponent,
        PostComponent,
        SafeHtmlPipe
    ],
    imports: [
        UniversalModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'blog', pathMatch: 'full' },
            { path: 'blog', component: BlogComponent },
            { path: 'post/:id', component: PostComponent },
        ])
    ]
})
export class AppModule {
}
