import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

  heroe:any={};

  constructor(private activatedRouter: ActivatedRoute,
    private heroesService:HeroesService
    ) { 
    this.activatedRouter.params.subscribe(params=>{
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log(params);
    });
  }

}
