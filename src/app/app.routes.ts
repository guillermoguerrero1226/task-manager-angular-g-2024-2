import { Routes } from '@angular/router';
import { TaskListComponent } from './features/task-list/task-list.component';
import { AccountComponent } from './features/account/account.component';
import { authGuard } from './core/guards/auth.guard';
import { ErrorPageComponent } from './features/shared/error-page/error-page.component';

export const routes: Routes = [
    { path: 'task-list', component: TaskListComponent },
    { path: 'account', component: AccountComponent, canActivate: [authGuard] },
    { path: 'error/:code', component: ErrorPageComponent },
    { path: '', component: TaskListComponent },
    { path: '**', component: TaskListComponent },
];
