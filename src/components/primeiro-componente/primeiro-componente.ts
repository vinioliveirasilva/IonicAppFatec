import { Component } from '@angular/core';

/**
 * Generated class for the PrimeiroComponenteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'primeiro-componente',
  templateUrl: 'primeiro-componente.html'
})
export class PrimeiroComponenteComponent {

  text: string;

  constructor() {
    console.log('Hello PrimeiroComponenteComponent Component');
    this.text = 'Hello World';
  }

}
