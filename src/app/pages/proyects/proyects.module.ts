import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectsPageRoutingModule } from './proyects-routing.module';

import { ProyectsPage } from './proyects.page';
import { FiltroProyectoPipe } from 'src/app/pipes/filtro-proyecto.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectsPageRoutingModule,
    FiltroProyectoPipe
  ],
  declarations: [ProyectsPage]
})
export class ProyectsPageModule {}
