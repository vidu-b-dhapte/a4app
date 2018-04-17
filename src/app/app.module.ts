import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService} from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroService }  from './hero.service';


const appRoutes:Routes=[
  {path:'',component:UserComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'hero',component:HeroesComponent}
  // {path:'hero-detail',component:HeroDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    LoginComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService,HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
