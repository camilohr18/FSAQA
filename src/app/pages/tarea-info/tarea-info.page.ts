import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, PopoverController, AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-tarea-info',
  templateUrl: './tarea-info.page.html',
  styleUrls: ['./tarea-info.page.scss'],
})
export class TareaInfoPage implements OnInit {


  taskId:any;
  loaded: boolean = false;
  task:any;
  loading: any;
  notesToUpdate:any;
  uId:any = '5azWXrluqEh888FNJyVo9ag1Ld83';
  creator = false;

  constructor(private activatedRoute: ActivatedRoute,
    private service: AuthService,
    private loadingCtrl: LoadingController,
    private popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    private router: Router) {
      this.taskId = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.taskId) {
        this.getTaskInfo()
      }
      this.uId = localStorage.getItem('logged');
   }

  ngOnInit() {}

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });
    await this.loading.present();
  }

  getTaskInfo() {
    this.presentLoading();
    this.service.getTaskById(this.taskId).then((data:any) => {
      console.log(data);
      if (data) {
        data.forEach((element:any) => {
          if(element.proyect) {
          if (element.proyect != 'none') {
            let proyecto = JSON.parse(element.proyect);
            element.proyect = proyecto;
            this.service.getUserById(element.proyect.sId).then(sup => {
              element.proyect.supName = sup[0].name;
            })
          }
        }
          if (element.notes) {
            let notes = JSON.parse(element.notes);
            element.notes = notes;
          }
          this.service.getUserById(element.cUid).then(user => {
            element.creatorName = user[0].name;
            if (element.img != 'No-Image') {
              let img = JSON.parse(element.img);
              element.img = img;
            }
            if (this.uId === element.cUid) {
              this.creator = true;
            }
            this.task = element;
            this.loaded = true;
            this.loading.dismiss();
          })
        });
      }
    })
  }

  async openImage(ev: any, message:string, info:boolean) {
    console.log(info)
      const popover = await this.popoverCtrl.create({
        component: PopoverInfoComponent,
        cssClass: 'my-custom-class',
        translucent: false,
        componentProps: {mss: message, inf: info},
      });
      await popover.present();
    
      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
  }

  changeTaskStatus(status:any, notes?:any) {
    if (status === 'rev') {
      this.getNotes(true, 'rev');
//      notes.status = 'revision';
//      notes.dRev = this.getDate();
//      console.log(this.notesToUpdate);
//      this.updateTask(notes);
    } else if (status === 'done') {
      this.getNotes(true, status);
    }
  }

  aceptTask() {
    let notes:any;
    this.changeTaskStatus('procesando', notes)
    notes = this.getNotes();
    notes.status = 'procesando';
    this.updateTask(notes);
  }


  async getNotes(only?:any, status?:any) {
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
            this.service.getUserById(this.uId).then (user => {
              let note = {
                note: data.paragraph,
                dNote: dateOfNote,
                cNote: user[0].name
              }
              let infoToUpdate:any;
              if (only) {
                let aNote: [{}] = [{}];
                if (this.task.notes) {
                  this.task.notes.push(note);
                  console.log( this.task.notes);
                  aNote = this.task.notes;
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
              this.updateTask(infoToUpdate);
              if (status === 'rev' || status === "done") {
                this.router.navigate(["/inicio"]);
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }

  updateTask(infoToUpdate:any) {
    this.service.updateTask( infoToUpdate, this.taskId ).then( resp =>{
      console.log(resp);
      this.task.notes = JSON.parse(resp.notes);
      this.task.status = "procesando"
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

  eliminateTask(id:any) {
    this.service.deleteTaskById(id).then(result => {
      console.log(result);
      this.notify();
      this.router.navigateByUrl('/inicio');
    })
  }

  async notify() {
    const alert = await this.alertCtrl.create({
      header: "Eliminaste la tarea de forma exitosa",
      buttons: [{
          text: 'Ok',
        }
      ]
    })
    await alert.present();
  }

  getSupervisor() {
    return this.service.getUserById(this.task.proyect.sId).then(sup => {
      let supName = sup[0].name;
      return supName;
    })
  }

}
