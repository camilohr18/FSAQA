import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'revision',
    loadChildren: () => import('./pages/revision/revision.module').then( m => m.RevisionPageModule)
  },
  {
    path: 'archivados',
    loadChildren: () => import('./pages/archivados/archivados.module').then( m => m.ArchivadosPageModule)
  },
  {
    path: 'tarea',
    loadChildren: () => import('./pages/tarea/tarea.module').then( m => m.TareaPageModule)
  },
  {
    path: 'tarea-info/:id',
    loadChildren: () => import('./pages/tarea-info/tarea-info.module').then( m => m.TareaInfoPageModule)
  },
  {
    path: 'proyects',
    loadChildren: () => import('./pages/proyects/proyects.module').then( m => m.ProyectsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
