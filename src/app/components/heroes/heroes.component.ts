import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import {HEROES} from '../../mock-heroes';
import { HeroService }  from '../../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
//hero:string;
hero:Hero={
  id: 1,
  name: 'Windstorm'
};
//heroes=HEROES;
heroes:Hero[] ;
selectedHero: Hero;
  constructor(private heroservice:HeroService) { }

  ngOnInit() {
    //this.hero='Batman';
    // this.hero.id=1;
    // this.hero.name='Batman';
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes():void{
    this.heroes=this.heroservice.getHeroes();
  }

}


