
import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#fff ');
  }
}
