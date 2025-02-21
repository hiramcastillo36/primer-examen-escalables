import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { Task } from './interfaces/task.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  tasks: Task[] = [
    { id: 1, title: 'Ir al supermercado', completed: false },
    { id: 2, title: 'Sacar al perro', completed: false },
    { id: 3, title: 'Estudiar Angular', completed: false },
    { id: 4, title: 'Hacer la comida', completed: false },
    { id: 5, title: 'Hacer la tarea', completed: false },
    { id: 6, title: 'Hacer la cama', completed: true },
    { id: 7, title: 'Hacer la compra', completed: true },
    { id: 8, title: 'Hacer la cena', completed: true },
    { id: 9, title: 'Ir al gimnasio', completed: false },
  ];

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

    markAsCompleted(taskId: number): void {
        this.tasks = this.tasks.map(task => {
        if (task.id === taskId) {
            task.completed = true;
        }
        return task;
        });
    }

}
