import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { PostsComponent } from './components/posts/posts.component'
// import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent}
]

@NgModule({
  exports: [RouterModule],
  imports :  [
    RouterModule.forRoot(routes)
  ]

})
export class AppRoutingModule { }
