import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio_FrontEnd';
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const cursor = this.elementRef.nativeElement.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    });

    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('mouseenter', () => {
        cursor.style.width = '60px'; // Tamaño aumenta al pasar sobre un enlace
        cursor.style.height = '60px';
      });
      link.addEventListener('mouseleave', () => {
        cursor.style.width = '40px'; // Tamaño vuelve al valor original
        cursor.style.height = '40px';
      });
    });
  }
}
