import { Component, Injectable, VERSION } from '@angular/core';
import { Father } from './app.module';
import { ActiveCartService } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private a: ActiveCartService, private t: TmaCartService) {}
}

@Injectable({
  providedIn: 'root',
})
// extends from imported ActiveCartService not from dependency injector ActiveCartService
export class TmaCartService extends ActiveCartService {
  constructor() {
    super();
  }
}
