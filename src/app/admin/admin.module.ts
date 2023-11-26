import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { ListaEncuestasComponent } from './lista-encuestas/lista-encuestas.component';
import { EstadisticasEncuestasComponent } from './estadisticas-encuestas/estadisticas-encuestas.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';




@NgModule({
  declarations: [
    InicioAdminComponent,
    ListaEncuestasComponent,
    EstadisticasEncuestasComponent,
    NavbarAdminComponent
  
    
    
  ],
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule,
   
    
  ]
})
export class AdminModule { }
