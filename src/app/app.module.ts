import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './bcomp/bcomp.component';
import { GetPostsComponent } from './get-posts/get-posts.component';
import { GetPostsService } from './get-posts/get-posts.service';

@NgModule({
  declarations: [
    AppComponent,
    AcompComponent,
    BcompComponent,
    GetPostsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [GetPostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
