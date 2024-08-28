import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(
    private auth: AngularFireAuth,
    private adb: AngularFirestore
  ) {

   }

   login(email:string, pass: string) {
     return new Promise ((resolve, rejected) => {
      this.auth.signInWithEmailAndPassword(email, pass).then( (user) => {
        let usuario:any = user.user;
        localStorage.setItem('email', usuario.email);
        this.getUserById(usuario.uid).then(result => {
          localStorage.setItem('name', result[0].name);
          localStorage.setItem('role', result[0].role);
        })
        resolve(usuario);
     }).catch(err => {rejected(err)})
     })
   }

   logOut() {
     this.auth.signOut();
     localStorage.clear()
   }

   resetPassword(email:string) {
     return new Promise<any>((resolve, reject) => {
       this.auth.sendPasswordResetEmail(email).then(() => {
         resolve('done');
     }, error => {
       reject(error);
     })
     })
   }

   updateUserInfo (id:string, update:string) {
     return new Promise<any>((resolve, reject) =>{
       this.adb.collection('users').doc(id).update(update).then(resp =>{
         resolve('done')
       }, error => {
         reject(error);
       })
     })
   }

   makeid(length:any) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public getUserByAcrom(acrom:string): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('users', ref => ref.where('acrom', '==', acrom)).get().subscribe(async (users) => {
        let data = users.docs.map(element => {
          let user:any = element.data();
          user.id = element.id;
          return user;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  
  public getUserById(uId:string): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('users', ref => ref.where('uid', '==', uId)).get().subscribe(async (users) => {
        let data = users.docs.map(element => {
          let user:any = element.data();
          user.id = element.id;
          return user;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public createTask( task:any, tId:string ) {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('tasks').doc(tId).set(task).then(async cTask => {
        let data = task;
        resolve(data);
      }, error => {
        reject(error);
      })
    });
  }

  public updateTask( task:any, tId:string ) {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('tasks').doc(tId).update(task).then(async cTask => {
        let data = task;
        resolve(data);
      }, error => {
        reject(error);
      })
    });
  }

  public getAsigenedTask(uid:string): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('tasks', ref => ref.where('aUid', '==', uid)).get().subscribe(async (tasks) => {
        let data = tasks.docs.map(element => {
          let task:any = element.data();
          task.id = element.id;
          return task;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getCreatedTask(uid:string): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('tasks', ref => ref.where('cUid', '==', uid)).get().subscribe(async (tasks) => {
        let data = tasks.docs.map(element => {
          let task:any = element.data();
          task.id = element.id;
          return task;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getReviewTask(uid:string): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('tasks', ref => ref.where('cUid', '==', uid)).get().subscribe(async (tasks) => {
        let data = tasks.docs.map(element => {
          let task:any = element.data();
          task.id = element.id;
          return task;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getTaskById(id:string): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('tasks', ref => ref.where('id', '==', id)).get().subscribe(async (tasks) => {
        let data = tasks.docs.map(element => {
          let task:any = element.data();
          task.id = element.id;
          return task;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public deleteTaskById(id:string): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('tasks').doc(id).delete().then(success => {
        console.log(success);
        resolve(success);
      }, error => {
        reject(error)
      })
    });
  }

  public deleteProjectById(id:string): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('proyects').doc(id).delete().then(success => {
        console.log(success);
        resolve(success);
      }, error => {
        reject(error)
      })
    });
  }

  public getProyects(): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('proyects').get().subscribe(async (result) => {
        let data = result.docs.map(element => {
          let project:any = element.data();
          project.id = element.id;
          return project;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getProjectById(id:string): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('proyects', ref => ref.where('id', '==', id)).get().subscribe(async (prj) => {
        let data = prj.docs.map(element => {
          let project:any = element.data();
          project.id = element.id;
          return project;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public createProject( project:any, id:string ) {
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('proyects').doc(id).set(project).then(async prj => {
        let data = prj;
        resolve(data);
      }, error => {
        reject(error);
      })
    });
  }

  public getAllTask(): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('tasks').get().subscribe(async (prj) => {
        let data = prj.docs.map(element => {
          let project:any = element.data();
          project.id = element.id;
          return project;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    }); 
  }

  public getAllUsers(): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.adb.collection('users').get().subscribe(async (users) => {
        let data = users.docs.map(element => {
          let user:any = element.data();
          user.id = element.id;
          return user;
        });
        resolve(data);
      }, error => {
        reject(error);
      });
    }); 
  }

  public createFirma( project:any, id:string ) {
     return new Promise<any>((resolve, reject) => {
      this.adb.collection('firmas').doc(id).set(project).then( prj => {
        this.adb.collection('firmas').doc(id).get().subscribe((otra:any) => {
          let data = otra.data();
          console.log(otra.data());
          resolve(data);
        })
      }, error => {
        reject(error);
      })
    });
  }

  public createFirma2( project:any, id:string ) {
     this.adb.collection('firmas').doc(id).set(project).then(resp => {
       this.adb.collection('firmas').doc(id).get().subscribe((otra:any) => {
         let data = otra.data();
         console.log(otra.data());
         return data;
       })
     })
    }

}
