import { Component } from '@angular/core';
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
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false },
    { id: 4, title: 'Task 4', completed: false },
    { id: 5, title: 'Task 5', completed: false },
  ];
}
