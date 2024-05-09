import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private _heroeService:HeroesService, private router:Router){
  }
  buscarHeroe(termino:string):any{
    this._heroeService.setTerminoBusqueda(termino);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/heroes']);
    });
  }
}
