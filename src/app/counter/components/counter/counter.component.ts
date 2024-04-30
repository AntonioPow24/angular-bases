import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <p>El contador actual es : {{counter}} </p>

    <button
      (click)="addValue(1)"
    >
      Agregar
    </button>

    <button
      (click)="reset()"
    >
      Resetear
    </button>
    
    <button
      (click)="quitValue(1)"
    >
      Quitar
    </button>

  `
})

export class CounterComponent {

  public counter: number = 0

  public addValue(value: number): void {
    this.counter += value
  }

  public quitValue(value: number): void {
    this.counter -= value
  }

  public reset(): void {
    this.counter = 0
  }




  constructor() { }

}
