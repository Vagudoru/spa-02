import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() heroeSelect: EventEmitter<number>;

  constructor(
    private router: Router
  ) {
    this.heroeSelect = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(nombre: string): void {
    this.router.navigate(['heroe', nombre]);
    //this.heroeSelect.emit(this.index);
  }

}
