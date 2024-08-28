import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { Router } from '@angular/router';


@Component({
  selector: 'app-archivados',
  templateUrl: './archivados.page.html',
  styleUrls: ['./archivados.page.scss'],
})
export class ArchivadosPage implements OnInit {
  allTask:any[]=[];
  orden:any;
  searchText:any;
  uId:any = '5azWXrluqEh888FNJyVo9ag1Ld83';

  constructor(
    private service: AuthService,
    private router: Router
  ) { 
    this.getAllTask();
  }

  ngOnInit() {
  }

  

  getAllTask() {
    this.service.getAsigenedTask(this.uId).then(asigned => {
      console.log(asigned);      
      if (asigned) {
        asigned.forEach((element:any) => {
          this.service.getUserById(element.cUid).then(creator =>{
              element.creatorName = creator[0].name;
              this.service.getUserById(element.aUid).then(asigned => {
                element.asignedName = asigned[0].name;
                if (element.status === 'completada') {
                  this.allTask.push(element)
                }
              })
          })
        });
      }
    })
  }

  getPiority(prioridad:string) {
    switch (prioridad) {
      case 'low' : 
        return "secondary";
        break
      case 'medium' :
        return "warning";
        break;
      case 'high': 
        return "danger";
        break;
      case 'emerg': 
        return "danger";
        break;
      default: return ''
    } 
  }

  openTask(id:string) {
    this.router.navigate([`tarea-info/${id}`])
  }

  onSearchChange(event:any) {
    this.searchText = event.detail.value;
  }

}
