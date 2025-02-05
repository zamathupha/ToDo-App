import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonicModule, IonCheckbox, IonButton, IonInput } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HomePage {
  newTaskTitle: string = '';
  newTaskDescription: string = '';
  tasks: Array<{
name: any; title: string, description: string, completed: boolean 
}> = [];
newTask: any;
i: number | undefined;

  addTask() {
    if (this.newTaskTitle.trim().length === 0) {
      return;
    }
    this.tasks.push({
      title: this.newTaskTitle,
      description: this.newTaskDescription,
      completed: false,
      name: undefined
    });
    this.newTaskTitle = '';
    this.newTaskDescription = '';
  }

  deleteTask(index: number | undefined) {
    if (index !== undefined) {
      this.tasks.splice(index, 1);
    }
  }
  
  markCompleted(index: number | undefined) {
    if (index !== undefined) {
      this.tasks[index].completed = true;
    }
  }
  
}






