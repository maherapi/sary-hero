import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHerosComponent } from './pages/all-heros/all-heros.component';
import { HeroComponent } from './pages/hero/hero.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '/',
    redirectTo: 'all-heros',
    pathMatch: 'full',
  },
  {
    path: 'all-heros',
    component: AllHerosComponent,
    pathMatch: 'full',
  },
  {
    path: 'hero/:id',
    component: HeroComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
