import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ProfileComponent } from './components/profile/profile.component';
import { ContainerComponent } from './components/container/container.component';
import { SocialMediaComponent } from './components/social-media/social-media.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContainerComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
