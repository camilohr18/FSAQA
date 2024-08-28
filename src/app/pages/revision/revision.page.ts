import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-revision',
  templateUrl: './revision.page.html',
  styleUrls: ['./revision.page.scss'],
})
export class RevisionPage implements OnInit {


  taskToReview:any[] = [];
  taskCreatedToReview:any[] = [];
  uId:any = '5azWXrluqEh888FNJyVo9ag1Ld83';
  tasks: any[] = [];
  testUid:any;
  searchText: string ='';
  segment: string = 'creadas'

  popArray: any[] = [
    'Esta seccion contiene las tareas que fueron asignadas para que tu las realices',
    'Esta seccion tiene tareas que tu has creado para ti o para otra persona',
  ]
  constructor(
    public popoverCtrl: PopoverController,
    private service : AuthService,
    private router: Router
  ) {
    this.uId = localStorage.getItem('logged');
  }

  ngOnInit() {
    this.service.getReviewTask(this.uId).then(asigned => {
      console.log(asigned);      
      if (asigned) {
        asigned.forEach((element:any) => {
          this.service.getUserById(element.cUid).then(creator =>{
            element.creatorName = creator[0].name;
            if (element.status === 'revision') {
              this.taskCreatedToReview.push(element);
            }
            console.log(this.taskCreatedToReview);
          })
        });
      }
    })
    this.service.getAsigenedTask(this.uId).then(asigned => {
      console.log(asigned);      
      if (asigned) {
        asigned.forEach((element:any) => {
          this.service.getUserById(element.cUid).then(creator =>{
            element.creatorName = creator[0].name;
            if (element.status === 'revision') {
              this.taskToReview.push(element);
            }
            console.log(this.taskToReview);
          })
        });
      }
    })
  }

  getPiority(prioridad:any) {
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

  async popover(ev: any, message:string, info:boolean) {
    console.log(info)
      const popover = await this.popoverCtrl.create({
        component: PopoverInfoComponent,
        cssClass: 'my-custom-class',
        event: ev,
        translucent: false,
        componentProps: {mss: message, inf: info},
      });
      await popover.present();
    
      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
  }

  openTask(id:string) {
    this.router.navigate([`tarea-info/${id}`])
  }

  onSearchChange(event:any) {
    this.searchText = event.detail.value;
  }

  segmentChanged(event:any) {
    this.segment = event.detail.value;
  }

  updateTask(id:any) {
    let infoToUpdate = {
      status: 'completada',
      dFinal: this.getDate(),
    }
    this.service.updateTask( infoToUpdate, id ).then( resp =>{
      console.log(resp);
    })
  }

  getDate() {
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let hour = date.getHours();
    let minutes = date.getMinutes();

    if(month < 10){
      console.log(`${day}-0${month}-${year}`)
    }else{
      console.log(`${day}-${month}-${year}`)
    }
    const dateOfNote = day+'/'+month+'/'+year+' '+hour+':'+minutes;
    return dateOfNote;
  }
}
