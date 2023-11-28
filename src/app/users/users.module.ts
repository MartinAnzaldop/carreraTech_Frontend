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
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AngularFireModule} from "@angular/fire/compat"
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ComentarioComponent } from './comentario/comentario.component';



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
    ResultadoComponent,
    RegisterComponent,
    LoginComponent,
    ComentarioComponent
    
    
  ],
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ]
})
export class UsersModule { }
