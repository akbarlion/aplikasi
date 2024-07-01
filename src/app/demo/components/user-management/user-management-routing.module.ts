import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: UserManagementComponent }
  ])],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
