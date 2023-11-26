import { Component, OnInit } from '@angular/core';
import { DatosUsuarioServiceService } from 'src/app/service/datos-usuario-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _user: DatosUsuarioServiceService) { }
  email: string = "";

  ngOnInit(): void {
    this.obtenerEmail();
  }

  obtenerEmail() {
    const emailData = localStorage.getItem('email');
    if (emailData) {
      const datoGuardado = JSON.parse(emailData);
      console.log(datoGuardado)
      
    }
  }

}
