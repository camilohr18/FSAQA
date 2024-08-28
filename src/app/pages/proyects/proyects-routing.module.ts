import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectsPage } from './proyects.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectsPageRoutingModule {}
