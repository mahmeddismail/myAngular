import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#1abc9c ');
  }

}
