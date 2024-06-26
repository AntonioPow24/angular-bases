import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'spiderman';
  public age: number = 45;


  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero(): void {
    // TODO: cambiar el nombre a antonio
    this.name = 'Antonio'
  }

  changeAge(): void {
    this.age += 1
  }

  resetForm(): void{
    this.name= 'ironman'
    this.age = 45
  }

}
