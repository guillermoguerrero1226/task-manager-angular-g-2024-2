import { Component, signal } from '@angular/core';
import { TaskService } from '../../core/services/task/task.service';
import { Task } from '../../core/interfaces/task.interface';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-task-list',
    imports: [CommonModule, MatSlideToggleModule, MatListModule, MatIconModule, MatButtonModule, MatCheckboxModule],
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
    tasks = this.taskService.tasks;

    constructor(private taskService: TaskService) { }

    addTask() {
        const newTask: Task = {
            id: Date.now(),
            title: 'Nueva tarea',
            completed: false,
        };
        this.taskService.addTask(newTask);
    }

    editTask(task: Task) {
        const updatedTitle = prompt('Editar título de la tarea:', task.title);
        if (updatedTitle !== null && updatedTitle.trim() !== '') {
            const updatedTask = { ...task, title: updatedTitle };
            this.taskService.editTask(updatedTask);
        }
    }

    deleteTask(taskId: number) {
        if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
            this.taskService.deleteTask(taskId);
        }
    }

    toggleCompletion(task: Task) {
        const updatedTask = { ...task, completed: !task.completed };
        this.taskService.editTask(updatedTask);
    }
}