import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-heroe',
  templateUrl: './find-heroe.component.html'
})
export class FindHeroeComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(
    private heroesServices: HeroesServices,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
      this.heroes = this.heroesServices.findHeroe(params['cadena']);
       // tslint:disable-next-line: no-string-literal
      this.termino = params['cadena'];
    });
  }
}
