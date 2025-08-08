import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: async () => {
            return import('./home/home').then((m) => m.Home)
        }
    },
    {
        path: 'todos',
        loadComponent: async () => {
            return import('./todos/todos').then((m) => m.Todos)
        }
    }
];
