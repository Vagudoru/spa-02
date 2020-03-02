import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private heroesServices: HeroesServices,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroes = this.heroesServices.getHeroes();
  }

  verHeroe(index: number) {
    this.router.navigate(['heroe', index]);
  }
}
