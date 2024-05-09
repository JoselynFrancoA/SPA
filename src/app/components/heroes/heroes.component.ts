import { ChangeDetectorRef, Component, OnChanges, SimpleChanges } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes:Heroe[]=[];
  busqueda:Heroe[]=[];
  constructor(private _heroeService:HeroesService,
    private router:Router, private cdRef: ChangeDetectorRef
  ){
  }
  ngOnInit(): void {
    this.actualizarDatos();
  }
  termino():string{
    return this._heroeService.getTerminoBusqueda();
  }
  actualizarDatos(): void {
    this.heroes = this._heroeService.getHeroes();
    this.busqueda = this._heroeService.buscarHeroes(this._heroeService.getTerminoBusqueda());
    console.log(this.heroes);
  }
  verHeroe(idx:number):any{
    this.router.navigate(["/heroe",idx]);
    console.log(idx);
  }
}
