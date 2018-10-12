import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ProfileComponent } from './components/profile/profile.component'
import { ContainerComponent } from './components/container/container.component'
import { SocialMediaComponent } from './components/social-media/social-media.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { PostsComponent } from './components/posts/posts.component'
import { PostComponent } from './components/post/post.component'
import { PostService } from './services/post.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContainerComponent,
    SocialMediaComponent,
    NavbarComponent,
    PostsComponent,
    PostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
