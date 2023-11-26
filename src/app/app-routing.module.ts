import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersRoutingModule } from './users/users.routing.module';
import { AdminRoutingModule } from './admin/admin.routing.module';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  UsersRoutingModule,
  AdminRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
