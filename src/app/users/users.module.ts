import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { ComunidadesComponent } from './comunidades/comunidades.component';
import { GuiasEstudioComponent } from './guias-estudio/guias-estudio.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    InicioComponent,
    NavbarComponent,
    TestComponent,
    DashboardComponent,
    NavbarUserComponent,
    BackendComponent,
    FrontendComponent,
    ComunidadesComponent,
    GuiasEstudioComponent,
    RecomendacionesComponent,
    ResultadoComponent
    
    
  ],
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule,
    
  ]
})
export class UsersModule { }
