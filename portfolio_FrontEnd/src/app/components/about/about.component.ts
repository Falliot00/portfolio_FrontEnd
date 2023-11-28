import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  description_isAnimated = false;
  description_hiddenContent = true;
  image_isAnimated = false;
  image_hiddenContent = true;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Obtén el elemento con el ID específico que desencadenará la animación
    const elementoConIdEspecifico = document.getElementById('About');

    // Verifica si el elemento existe antes de acceder a sus propiedades
    if (elementoConIdEspecifico) {
      // Calcula la posición del elemento en la ventana
      const elementoRect = elementoConIdEspecifico.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Si el elemento está en el viewport (es decir, en la ventana visible)
      /*console.log('elemento top:');
      console.log(elementoRect.top);
      console.log('elemento bot:');
      console.log(elementoRect.bottom);*/
      if (elementoRect.top + elementoRect.bottom / 2 < viewportHeight) {
        // Activa la animación
        this.image_isAnimated = true;
        this.description_isAnimated = true;
        this.description_hiddenContent = false;
        this.image_hiddenContent = false;
      }
    }
  }

  /*private elementId = 'About'; // Reemplaza 'elementToTrack' con el ID de tu elemento

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const element = document.getElementById(this.elementId);
    const navbar = document.getElementById('navbar'); // Reemplaza 'navbar' con el ID de tu navbar

    if (element && navbar) {
      const elementRect = element.getBoundingClientRect();
      const navbarRect = navbar.getBoundingClientRect();

      if (elementRect.top < navbarRect.height) {
        this.image_isAnimated = true;
        this.description_isAnimated = true;
        this.description_hiddenContent = false;
        this.image_hiddenContent = false; // Agrega una clase CSS para fijar el navbar
      }
    }
  }*/
}
