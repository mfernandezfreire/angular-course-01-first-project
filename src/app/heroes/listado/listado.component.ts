import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Capitan America'];
  deletedHeroe: string = '';


  borrarHeroe() {
    this.deletedHeroe = this.heroes.pop() || '';
  }
}
