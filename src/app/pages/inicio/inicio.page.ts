import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
import { MenuController, PopoverController, AlertController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  taskCreated: any[] = [];
  taskToReview: any[] = [];
  taskToMe: any[] = [];
  taskAsigned: any[] = [];
  uId:any = '5azWXrluqEh888FNJyVo9ag1Ld83';
  tasks: any[] = [];
  testUid:any;
  notiReview = true;
  notiAsigned = true;
  segment = 'asignadas';
  task:any;
  taskId:any;
  searchText: string ='';
  popArray: any[] = [
    'Esta seccion contiene las tareas que fueron asignadas para que tu las realices',
    'Esta seccion tiene tareas que tu has creado para ti o para otra persona',
  ]
  constructor(
    private router: Router,
    private service: AuthService,
    private menuCtrl : MenuController,
    private alertCtrl: AlertController,
    public popoverCtrl: PopoverController,
  ) {
   }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.checkTasks();
  }

  onSearchChange(event:any) {
    this.searchText = event.detail.value;
    console.log(this.searchText)
  }

  checkTasks() {
    this.taskToMe = [];
    this.taskToReview = [];
    this.taskCreated = [];
    this.taskAsigned = [];
    this.service.getAsigenedTask(this.uId).then(asigned => {
      if (asigned) {
        asigned.forEach((element:any) => {
          this.service.getUserById(element.cUid).then(creator =>{
              element.creatorName = creator[0].name;
              if (element.status === 'creada') {
                this.taskToMe.push(element)
              }
          })
        });
      }
    })
    this.service.getCreatedTask(this.uId).then(asigned => {  
      if (asigned) {
        asigned.forEach((element:any) => {
          this.service.getUserById(element.cUid).then(creator =>{
              element.creatorName = creator[0].name;
              this.service.getUserById(element.aUid).then(asigned => {
                element.asignedName = asigned[0].name;
              })
              if (element.status != 'completada') {
                this.taskCreated.push(element)
              }
          })
        });
      }
    })
    this.service.getReviewTask(this.uId).then(review => { 
      if (review) {
        review.forEach((element:any) => {
          this.service.getUserById(element.cUid).then(creator =>{
            element.creatorName = creator[0].name;
            if (element.cUid === this.uId) {
              if (element.status === 'revision') {
                this.taskToReview.push(element);
              }
            }
          })
        });
        console.log(this.taskToReview);
      }
    })

    this.service.getAsigenedTask(this.uId).then(asigned => { 
      if (asigned) {
        asigned.forEach((element:any) => {
          this.service.getUserById(element.cUid).then(creator =>{
            element.creatorName = creator[0].name;
            if (element.status === 'procesando') {
              this.taskAsigned.push(element);
            }
          })
        });
        console.log(this.taskAsigned);
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

/*  openMenu() {
    this.menuCtrl.open();
  }*/

  segmentChanged(event:any) {
    this.segment = event.detail.value;
  }

  
  changeTaskStatus(task:any, status:string) {
    console.log(task)
    if (status === 'rev') {
      this.getNotes(true, 'rev', task);
//      notes.status = 'revision';
//      notes.dRev = this.getDate();
//      console.log(this.notesToUpdate);
//      this.updateTask(notes);
    } else if (status === 'done') {
      this.getNotes(true, status, task);
    }
  }

  aceptTask(task:any) {
    let notes:any;
    this.task = task;
    this.changeTaskStatus(task, 'procesando');
    notes = this.getNotes(false,'',task);
    notes.status = 'procesando';
//    this.updateTask(notes, task.id);
  }


  async getNotes(only?:any, status?:any, task?:any) {
    const alert = await this.alertCtrl.create({
      header: 'Notas Adicionales',
      inputs: [
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Coloca aqui notas adicionales si tienes alguna'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Ok',
          handler: (data:any) => {
            let dateOfNote = this.getDate();
            console.log(task);
            if(task.notes) {
              task.notes = JSON.parse(task.notes);
            }
            this.service.getUserById(this.uId).then (user => {
              let note = {
                note: data.paragraph,
                dNote: dateOfNote,
                cNote: user[0].name
              }
              let infoToUpdate:any;
              if (only) {
                let aNote: [{}] = [{}];
                if (task.notes) {
                  task.notes.push(note);
                  console.log( task.notes);
                  aNote = task.notes;
                }else {
                  console.log(note);
                  aNote[0] = note;
                }
                infoToUpdate = {
                  notes: JSON.stringify(aNote),
                }
              }else {
                let aNote:any;
                let aNote2: [{}] = [{}];
                if (note.note === "") {
                  aNote = "";
                  infoToUpdate = {
                    status: 'procesando',
                    notes: JSON.stringify(aNote),
                    dProcesing: dateOfNote
                  }
                } else {
                  aNote2[0] = note;
                  infoToUpdate = {
                    status: 'procesando',
                    notes: JSON.stringify(aNote2),
                    dProcesing: dateOfNote
                  }
                }
              }
              if (status === 'rev') {
                infoToUpdate.dRev = dateOfNote;
                infoToUpdate.status = 'revision';
              } else if ( status === "done"){
                infoToUpdate.dFinal = dateOfNote;
                infoToUpdate.status = 'completada';
              }
              console.log(infoToUpdate);
              this.updateTask(infoToUpdate, task.id);
              if (status === 'rev' || status === "done") {
                this.checkTasks();
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }

  updateTask(infoToUpdate:any, id:string) {
    this.service.updateTask( infoToUpdate, id ).then( resp =>{
      console.log(resp);
      this.checkTasks();
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
