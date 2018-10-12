import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ProfileComponent } from './components/profile/profile.component';
import { LeftColumnComponent } from './components/left-column/left-column.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LeftColumnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
