import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { ListaEncuestasComponent } from './lista-encuestas/lista-encuestas.component';
import { EstadisticasEncuestasComponent } from './estadisticas-encuestas/estadisticas-encuestas.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ListaMensajeComponent } from './lista-mensaje/lista-mensaje.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UsersModule } from '../users/users.module';
import { NavbarComponent } from '../users/navbar/navbar.component';




@NgModule({
  declarations: [
    InicioAdminComponent,
    ListaEncuestasComponent,
    EstadisticasEncuestasComponent,
    NavbarAdminComponent,
    ListaMensajeComponent,
    LoginAdminComponent,
    
  
    
  
    
    
  ],
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    UsersModule,
   
    
  ]
})
export class AdminModule { }
