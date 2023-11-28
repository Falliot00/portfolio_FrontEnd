import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isAnimated = false;
  hiddenContent = true;

  private elementId = 'About'; // Reemplaza 'elementToTrack' con el ID de tu elemento

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const element = document.getElementById(this.elementId);
    const navbar = document.getElementById('navbar'); // Reemplaza 'navbar' con el ID de tu navbar

    if (element && navbar) {
      const elementRect = element.getBoundingClientRect();
      const navbarRect = navbar.getBoundingClientRect();

      if (elementRect.top < navbarRect.height) {
        this.isAnimated = true;
        this.hiddenContent = false; // Agrega una clase CSS para fijar el navbar
      } else {
        this.isAnimated = false; // Quita la clase CSS para fijar el navbar
      }
    }
  }
}
