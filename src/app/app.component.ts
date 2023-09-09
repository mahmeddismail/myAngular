import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTask';
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'body-class');
    }
}
