import { Injectable, signal } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor() { }

    private tasksSignal = signal<Task[]>([
        { id: 1, title: 'Estudiar ingles', completed: false },
        { id: 2, title: 'Estudiar C#', completed: false },
        { id: 3, title: 'Leer 1 libros', completed: false },
    ]);

    get tasks() {
        return this.tasksSignal.asReadonly();
    }

    addTask(task: Task) {
        this.tasksSignal.update((tasks) => [...tasks, task]);
    }

    editTask(updatedTask: Task) {
        this.tasksSignal.update((tasks) =>
            tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
    }

    deleteTask(taskId: number) {
        this.tasksSignal.update((tasks) =>
            tasks.filter((task) => task.id !== taskId)
        );
    }
}
