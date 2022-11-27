import { Component, Injectable, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActiveCartService {
  constructor() {
    console.log('original activecartservice');
  }
}
