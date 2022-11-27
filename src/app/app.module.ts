import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActiveCartService, HelloComponent } from './hello.component';

@Injectable({
  providedIn: 'root',
})
export class Father {
  constructor() {
    console.log('father constructor ran');
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ActiveCartService,
      useClass: Father,
    },
  ],
})
export class AppModule {}
