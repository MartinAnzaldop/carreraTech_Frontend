import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioAdminComponent } from './inicio-admin/inicio-admin.component';
import { ListaEncuestasComponent } from './lista-encuestas/lista-encuestas.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { EstadisticasEncuestasComponent } from './estadisticas-encuestas/estadisticas-encuestas.component';


const routes: Routes = [
     { path: 'inicioAdmin', component: InicioAdminComponent },
     { path: 'listaEncuestas', component: ListaEncuestasComponent },
     { path: 'navbarAdmin', component: NavbarAdminComponent },
     { path: 'estaditicasEncuestas', component: EstadisticasEncuestasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AdminRoutingModule { }