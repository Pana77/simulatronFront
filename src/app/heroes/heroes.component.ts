import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroDTO/hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})

export class HeroesComponent {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    
  }
  ngOnInit(): void{
    this.getHeroes();
  }
  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
