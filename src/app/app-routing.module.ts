import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PVSGridComponent } from './pvs-grid/pvs-grid.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'property-details', component: PropertyDetailsComponent },
  { path: 'PVS-Grid', component: PVSGridComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login page by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
