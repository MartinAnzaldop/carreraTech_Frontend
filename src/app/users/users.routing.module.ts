import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { ComunidadesComponent } from './comunidades/comunidades.component';
import { GuiasEstudioComponent } from './guias-estudio/guias-estudio.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
     { path: 'inicio', component: InicioComponent },
     { path: 'test', component: TestComponent },
     { path: 'dashboard', component: DashboardComponent },
     { path: 'backend', component: BackendComponent },
     { path: 'frontend', component: FrontendComponent },
     { path: 'comunidades', component: ComunidadesComponent },
     { path: 'guias', component: GuiasEstudioComponent },
     { path: 'recomendaciones', component: RecomendacionesComponent },
     { path: 'resultado', component: ResultadoComponent },
     { path: 'register', component: RegisterComponent },
     { path: 'login', component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class UsersRoutingModule { }