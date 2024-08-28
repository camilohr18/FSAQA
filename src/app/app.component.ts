import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Revision', url: '/revision', icon: 'alarm' },
    { title: 'Archivadas', url: '/archivados', icon: 'folder-open' },
  ];
  public labels = [
    { title: 'Crear Tarea', url: '/tarea', icon: 'clipboard-outline' },
    { title: 'Proyectos', url: '/proyects', icon: 'file-tray-stacked' },
    { title: 'Team', url: '/team', icon: 'people' }
  ];

  loged:boolean = true;
  email:any;
  name:any;
  role:any;
  constructor() {}
}
