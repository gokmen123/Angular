// app.routes.ts

import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';
import { FilterPageComponent } from './pages/supplier-page/filter-page/filter-page.component';
export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, 
  {path:'supplier',component: SupplierPageComponent , canActivate: [AuthGuard]},
  
];

