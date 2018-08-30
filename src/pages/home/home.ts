import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any = [];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController) {
      this.data.list = "";
  }

  create() {
    if(this.data.list == ""){
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: "Can't add empy list!",
        buttons: ['Ok']
      });
      alert.present();
    } else {
      this.data.push(this.data.list)
      this.data.list = "";
      let alert =  this.alertCtrl.create({
        subTitle: 'Successfully added!',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

  read() {

  }

  update(i) {
    let alert = this.alertCtrl.create({
      title: 'Edit',
      inputs: [
        {
          name: 'list',
          placeholder: this.data[i]
        }
      ],
      buttons: [
        {
          text: 'OK',
          handler: data => {
            const confirm = this.alertCtrl.create({
              title: 'Confirmation',
              subTitle: 'Are you sure you want to keep changes?',
              buttons: [
                {
                  text: 'No',
                  role: 'cancel'
                },
                {
                  text: 'Yes',
                  handler: () => {
                    this.data[i] = data.list;
                  }
                }
              ]
            });
            confirm.present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
        
      ]
    });
    alert.present();
  }

  delete(list) {
    for(var i = 0; i < this.data.length; i++){
      if(this.data[i] == list){
        let confirm = this.alertCtrl.create({
          title: 'Confirmation!',
          subTitle: 'Are you sure you want to delete ' + list,
          buttons:[
            {
              text: 'No',
              role: 'cancel'
            },
            {
              text: 'Yes',
              handler: () => {
                this.data.splice(i,1);  
              }
            }
          ]
        });
        confirm.present();
        break;
      }
    }
  }

}
