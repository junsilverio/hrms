import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent)
      },
      {
        path: 'employees',
        loadComponent: () => import('./features/employees/employee-list/employee-list.component').then((m) => m.EmployeeListComponent)
      },
      {
        path: 'employees/:id',
        loadComponent: () => import('./features/employees/employee-profile/employee-profile.component').then((m) => m.EmployeeProfileComponent)
      },
      {
        path: 'attendance',
        loadComponent: () => import('./features/attendance/attendance.component').then((m) => m.AttendanceComponent)
      },
      {
        path: 'payroll',
        loadComponent: () => import('./features/payroll/payroll.component').then((m) => m.PayrollComponent)
      },
      {
        path: 'departments',
        loadComponent: () => import('./features/departments/departments.component').then((m) => m.DepartmentsComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/settings/settings.component').then((m) => m.SettingsComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
