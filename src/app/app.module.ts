import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ProfileComponent } from './components/profile/profile.component'
import { ContainerComponent } from './components/container/container.component'
import { SocialMediaComponent } from './components/social-media/social-media.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { PostsComponent } from './components/posts/posts.component'
import { PostService } from './services/post.service'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContainerComponent,
    SocialMediaComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
