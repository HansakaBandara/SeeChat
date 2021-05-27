import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{NgxAgoraModule} from 'ngx-agora';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAgoraModule.forRoot({AppID: 'insert your agora project id here'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
