import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import {HEROES} from '../../mock-heroes';

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
heroes=HEROES;
selectedHero: Hero;
  constructor() { }

  ngOnInit() {
    //this.hero='Batman';
    // this.hero.id=1;
    // this.hero.name='Batman';
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}


