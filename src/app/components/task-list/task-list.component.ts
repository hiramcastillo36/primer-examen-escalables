import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {
    @Input()
    tasks: Task[] = [
        {
            id: 0,
            title: '',
            completed: false
        }
    ]

    @Output()
    deleteTaskEvent = new EventEmitter<number>();
    @Output()
    markAsCompletedEvent = new EventEmitter<number>();

    deleteTask(taskId: number): void {
        this.deleteTaskEvent.emit(taskId);
    }

    markAsCompleted(taskId: number): void {
        this.markAsCompletedEvent.emit(taskId);
    }
}
