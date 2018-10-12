import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { PostsComponent } from './components/posts/posts.component'
import { PostComponent } from './components/post/post.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostComponent}
]

@NgModule({
  exports: [RouterModule],
  imports :  [
    RouterModule.forRoot(routes)
  ]

})
export class AppRoutingModule { }
