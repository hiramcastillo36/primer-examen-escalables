import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {
    @Output()
    deleteTask = new EventEmitter<number>();
    @Output()
    markAsCompleted = new EventEmitter<number>();

    onDeleteTask(taskId: number) {
        this.deleteTask.emit(taskId);
    }

}
