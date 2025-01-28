import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader,
   IonToolbar,
    IonTitle,
     IonContent,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonIcon,
    
  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader,IonToolbar, IonItem,IonContent,IonLabel,
   
],
})
export class HomePage {
  newTask: string = '';
  tasks: Array<{ name: string, completed: boolean }> = [];
  i: number = 0;

  addTask() {
    if (this.newTask.trim().length === 0) {
      return;
    }
    this.tasks.push({
      name: this.newTask,
      completed: false
    });
    this.newTask = '';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  
}





