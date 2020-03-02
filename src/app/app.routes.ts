import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FindHeroeComponent } from './components/find-heroe/find-heroe.component';



// tslint:disable-next-line: variable-name
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'find/:cadena', component: FindHeroeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// tslint:disable-next-line: variable-name
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
