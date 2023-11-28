import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  image1_isAnimated = false;
  image1_hiddenContent = true;
  description1_isAnimated = false;
  description1_hiddenContent = true;
  image2_isAnimated = false;
  image2_hiddenContent = true;
  description2_isAnimated = false;
  description2_hiddenContent = true;

  /*private elementId1 = 'project1';
  private elementId2 = 'project2';*/

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Obtén el elemento con el ID específico que desencadenará la animación
    const elementoConIdEspecifico1 = document.getElementById('project1');
    const elementoConIdEspecifico2 = document.getElementById('project2');

    // Verifica si el elemento existe antes de acceder a sus propiedades
    if (elementoConIdEspecifico1) {
      // Calcula la posición del elemento en la ventana
      const elementoRect = elementoConIdEspecifico1.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Si el elemento está en el viewport (es decir, en la ventana visible)
      if (elementoRect.bottom < viewportHeight) {
        // Activa la animación
        this.description1_isAnimated = true;
        this.image1_isAnimated = true;
        this.image1_hiddenContent = false;
        this.description1_hiddenContent = false;
      }
    }

    // Verifica si el elemento existe antes de acceder a sus propiedades
    if (elementoConIdEspecifico2) {
      // Calcula la posición del elemento en la ventana
      const elementoRect = elementoConIdEspecifico2.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Si el elemento está en el viewport (es decir, en la ventana visible)
      if (elementoRect.bottom < viewportHeight) {
        // Activa la animación
        this.description2_isAnimated = true;
        this.image2_isAnimated = true;
        this.image2_hiddenContent = false;
        this.description2_hiddenContent = false;
      }
    }
  }

  /*@HostListener('window:scroll', ['$event'])
  onScroll() {
    const element1 = document.getElementById(this.elementId1);
    const element2 = document.getElementById(this.elementId2);
    const navbar = document.getElementById('navbar');

    if (element1 && navbar) {
      const elementRect = element1.getBoundingClientRect();
      const navbarRect = navbar.getBoundingClientRect();

      if (elementRect.top < navbarRect.height) {
        this.description1_isAnimated = true;
        this.image1_isAnimated = true;
        this.image1_hiddenContent = false;
        this.description1_hiddenContent = false;
      }
    }

    if (element2 && navbar) {
      const elementRect = element2.getBoundingClientRect();
      const navbarRect = navbar.getBoundingClientRect();

      if (elementRect.top < navbarRect.height) {
        this.description2_isAnimated = true;
        this.image2_isAnimated = true;
        this.image2_hiddenContent = false;
        this.description2_hiddenContent = false;
      }
    }
  }*/
}
