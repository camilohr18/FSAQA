import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from '../../services/auth.service';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
})
export class TareaPage implements OnInit {


  userName:any;
  supName:any
  priority:any;
  description:any;
  image:any;
  coverImage:any;
  banner_to_upload: any = '';
  files:any;
  files_uploaded: any[] = [];
  name_filled:any;
  prior_filled:any;
  desc_filled:any;
  sup_filled:any;
  cUid:any;
  aUid:any;
  proyects:any;
  supEditable: boolean = false;
  supAcrom:any;
  taskProject:any;


  constructor(
    private actionSheetCtrl: ActionSheetController,
    private service: AuthService,
    private firestorage: AngularFireStorage,
    public alertCtrl: AlertController,
    public router: Router) { }

  ngOnInit() {
    this.service.getProyects().then( result => {
      this.proyects = result;
      console.log(result)
    });
  }

  
  checkInfoName($event:any) {
    if ($event.target.value) {
      this.name_filled = "success"
    }
  }
  checkInfoPrior($event:any) {
    if ($event.target.value) {
      this.prior_filled = "success"
    }
  }
  checkInfoDesc($event:any) {
    if ($event.target.value) {
      this.desc_filled = "success"
    }
  }

  changeListener(event:any) : void {
    this.files = event.target.files;
    this.loadPicture(this.files);
  }

  loadPicture(files:any) {

    console.log('fle', files);
    this.banner_to_upload = [];
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    this.banner_to_upload = files;
    if (this.banner_to_upload) {
      console.log('ok');
      const file1 = files[0];
      const storageRef = this.firestorage.ref('task' + '/' + file1.name);
      const task = storageRef.put(file1).then( allGood => {
        console.log(allGood);
        storageRef.getDownloadURL()
          storageRef.getDownloadURL().subscribe((downloadURL) => {
            console.log('download ur', downloadURL);
            this.coverImage = downloadURL;
            if (this.files_uploaded.length === 0) {
              this.files_uploaded[0] = this.coverImage;
            }else  {
              let lenght = this.files_uploaded.length;
              this.files_uploaded[lenght] = this.coverImage;
            }
          },
          (error) => {
            console.error('upload rejected', error);
          });
      });

    } else {
      console.log('error');
    }
  }

  crearTarea() {
    this.verificarCampos();
  }

  verificarCampos(){
    if (!this.userName) {
      console.log("nombre incompleto");
      this.name_filled = "danger";
    }
    if (!this.priority) {
      console.log("prioridad no seteada");
      this.prior_filled = "danger";
    }
    if (!this.description) {
      console.log("No hay desc");
      this.desc_filled = "danger";
    }
    if (this.name_filled == 'danger' || this.prior_filled == 'danger' || this.desc_filled == 'danger') {
      this.alertNotFilled();
    }
    this.service.getUserByAcrom(this.userName).then( (user:any) => {
      if (user) {
        let attached;
        this.cUid = localStorage.getItem('logged');
        this.aUid = user[0].uid;
        const id = this.service.makeid(15);
        if (this.files_uploaded.length != 0) {
          attached = JSON.stringify(this.files_uploaded);
        }else {
          attached = 'No-Image'
        }
        if (!this.taskProject) {
          if (this.supAcrom) {
            this.service.getUserByAcrom(this.supAcrom).then(result =>{
              this.taskProject = {
                id: 'none',
                pDesc: 'No hay descripcion',
                pName: 'No hay informacion',
                sId: result[0].uid,
                sName: result[0].name,
              }
              const task = {
                cUid : this.cUid,
                aUid : this.aUid,
                priority: this.priority,
                desc: this.description,
                img: attached,
                status: 'creada',
                id: id,
                dCreada: this.getDate(),
                proyect: JSON.stringify(this.taskProject)
              }
              this.service.createTask(task, id).then( resp =>{
                console.log(resp);
                this.alertMss('Tarea creada exitosamente. Puedes revisar tus tareas creadas en el panel de inicio')
                this.router.navigate(['/inicio'])
              })
            })
          }else {
            this.taskProject = {
              id: 'none',
              pDesc: 'No hay descripcion',
              pName: 'No hay informacion',
              sId: 'No hay sId',
              sName: 'None',
            }
            const task = {
              cUid : this.cUid,
              aUid : this.aUid,
              priority: this.priority,
              desc: this.description,
              img: attached,
              status: 'creada',
              id: id,
              dCreada: this.getDate(),
              proyect: JSON.stringify(this.taskProject)
            }
            this.service.createTask(task, id).then( resp =>{
              console.log(resp);
              this.alertMss('Tarea creada exitosamente. Puedes revisar tus tareas creadas en el panel de inicio')
              this.router.navigate(['/inicio'])
            })
          }
        }else { 
        if (this.taskProject != 'none') {
          console.log(this.taskProject)
          this.taskProject = JSON.stringify(this.taskProject);
        }else {
          if (this.supAcrom) {
            this.service.getUserByAcrom(this.supAcrom).then(resp => {
              this.taskProject = {
                id: 'none',
                pDesc: 'No hay descripcion',
                pName: 'No hay informacion',
                sId: resp[0].uid,
                sName: resp[0].name,
              }
              this.taskProject = JSON.stringify(this.taskProject);
              const task = {
                cUid : this.cUid,
                aUid : this.aUid,
                priority: this.priority,
                desc: this.description,
                img: attached,
                status: 'creada',
                id: id,
                dCreada: this.getDate(),
                proyect: this.taskProject,
              }
              this.service.createTask(task, id).then( resp =>{
                console.log(resp);
                this.alertMss('Tarea creada exitosamente. Puedes revisar tus tareas creadas en el panel de inicio')
                this.router.navigate(['/inicio'])
              })
            })
          }
          this.taskProject = {
            id: 'none',
            pDesc: 'No hay descripcion',
            pName: 'No hay informacion',
            sId: 'No hay sId',
            sName: 'None',
          }
          this.taskProject = JSON.stringify(this.taskProject);
        }
        const task = {
          cUid : this.cUid,
          aUid : this.aUid,
          priority: this.priority,
          desc: this.description,
          img: attached,
          status: 'creada',
          id: id,
          dCreada: this.getDate(),
          proyect: this.taskProject,
        }
        console.log('esta es la tarea',task)
        this.service.createTask(task, id).then( resp =>{
          console.log(resp);
          if (resp) {
            this.alertMss('Tarea creada exitosamente. Puedes revisar tus tareas creadas en el panel de inicio')
            this.router.navigate(['/inicio'])
          }
        }).catch(error => {
          console.log(error);
          this.alertMss('Ha ocurrido un error en la creacion de la tarea. Intenta nuevamente. Si el error persiste por favor contacta al administrador '+error)
        })
      }
      }
    }).catch (error => {
      /*aqui va una alerta con el error*/
      console.log(error);
      this.alertMss('Ha ocurrido un error en la creacion de la tarea. Intenta nuevamente. Si el error persiste por favor contacta al administrador '+error)
    })
  }

  async alertNotFilled() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: '!Atencion!',
      message: 'Debes llenar todos los campos en rojo para que la tarea sea creada apropiadamente.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async alertMss(message:string) {
    const alert = await this.alertCtrl.create({
      header: '!Atencion!',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  eliminarImg(item:any) {
    console.log(item);
    this.files_uploaded = this.files_uploaded.filter( filtered => {
      return filtered != item;
    })
    console.log(this.files_uploaded);
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

  getSupervisor(event:any) {
    if (event.detail.value === 'none') {
      this.supEditable = false;
      return
    }
    this.service.getUserById(event.detail.value.sId).then(sup =>{
      this.supAcrom = sup[0].acrom;
      this.supEditable = true;
    })
  }

}
