/*import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isAnimated = false;
  hiddenContent = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 1000) {
      this.isAnimated = true;
      this.hiddenContent = false;
    } else {
      this.isAnimated = false;
      /*this.hiddenContent = true;
    }
  }
}*/

/*import { Component, HostListener } from '@angular/core';

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
        /*navbar.classList.add('fixed');
        this.isAnimated = true;
        this.hiddenContent = false; // Agrega una clase CSS para fijar el navbar
      } else {
        /*navbar.classList.remove('fixed');
        this.isAnimated = false; // Quita la clase CSS para fijar el navbar
      }
    }
  }
}*/
