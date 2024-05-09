import { Component } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  heroe: any={};
  constructor(private _heroeService:HeroesService,
     private router:Router, 
     private activatedRoute:ActivatedRoute
  ){
    this.activatedRoute.params.subscribe(
      params => {this.heroe = this._heroeService.getHeroe(params['id'])}
    );
  }
  termino():any{
    this._heroeService.setTerminoBusqueda("");
  }
}
