import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPostComponent } from './shared/components/card-post/card-post.component';
import { CardShopComponent } from './share/components/card-shop/card-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule,
    CardPostComponent,
    CardShopComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
