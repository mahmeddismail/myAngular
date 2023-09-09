import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  myImages: string[] = [
    "assets/images/poert1.png",
    "assets/images/port2.png",
    "assets/images/port3.png",
    "assets/images/poert1.png",
    "assets/images/port2.png",
    "assets/images/port3.png",
  ]

  showLightBox: boolean = false;
  selectedImage: string | undefined;

  openPhoto(index: number) {
    this.selectedImage = this.myImages[index];
    this.showLightBox = true;
    console.log(this.selectedImage, this.showLightBox);
  }

  closePhoto() {
    this.showLightBox = false;
  }

  constructor(private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', '#fff ');
  }
}