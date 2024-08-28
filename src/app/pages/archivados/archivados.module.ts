import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchivadosPageRoutingModule } from './archivados-routing.module';

import { ArchivadosPage } from './archivados.page';
import { FiltroPipe } from "../../pipes/filtro.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchivadosPageRoutingModule,
    FiltroPipe
  ],
  declarations: [ArchivadosPage]
})
export class ArchivadosPageModule {}
