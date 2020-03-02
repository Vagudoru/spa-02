import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesServices: HeroesServices
  ) {
    this.activatedRoute.params.subscribe( params => {
    // tslint:disable-next-line: no-string-literal
    this.heroe = this.heroesServices.getHeroeByName(params['id']);
    });
  }

  ngOnInit() {
  }

}
