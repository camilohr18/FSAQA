import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from '../../services/auth.service';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.page.html',
  styleUrls: ['./proyects.page.scss'],
})
export class ProyectsPage implements OnInit {

  
  currentProyects:any;
  searchText: string ='';
  searchType:any;

  constructor(
      private service: AuthService,
      private router: Router
  ) { }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos() {
    this.service.getProyects().then(prj => {
      console.log(prj);
      this.currentProyects = prj;
      prj.forEach((element:any) => {
        this.service.getUserById(element.sId).then(sup =>{
          element.supName = sup[0].name;
        })
      });
    })
  }

  ionViewWillEnter() {
    this.getProyectos();
  }

  onSearchChange($event:any) {
    this.searchText = $event.detail.value;
  }

  openProyect(id:any) {
    this.router.navigate([`proyecto-info/${id}`])
  }

  createProjyct() {
    this.router.navigate(['/proyecto']);
  }

}
