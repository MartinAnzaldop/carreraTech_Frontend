import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TESTROL } from 'src/app/models/testRol';
import { TestNivelService } from 'src/app/service/test-nivel.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  listaTest:TESTROL []=[];
  color:string="";
  basico:string="Principiante. Se necesita más práctica y estudio.";
  intermedio:string="Intermedio. Un buen conocimiento, pero hay áreas de mejora.";
  avanzado:string="Avanzado. Excelente comprensión de los conceptos.";
  nivel:string="";
  sumaRespuestas = 0;
  constructor(private router: Router, private _Test: TestNivelService) { }

  ngOnInit(): void {
    this.obtenerTest();
  }

  obtenerTest() {
    this._Test.getTest().subscribe(data => {
      console.log(data);
      this.listaTest = data;
  
      // Verificar si hay elementos en la lista
      if (this.listaTest.length > 0) {
        // Obtener el último registro
        const ultimoRegistro = this.listaTest[this.listaTest.length - 1];

        // Sumar las respuestas de respuesta1 a respuesta15
       
        for (let i = 1; i <= 15; i++) {
          const respuestaKey = 'respuesta' + i;
          const respuesta = ultimoRegistro[respuestaKey as keyof TESTROL];
          if (typeof respuesta === 'number') {
            
          this.sumaRespuestas += respuesta;
          }
        }

        if(this.sumaRespuestas<=5){
          this.nivel=this.basico;
          this.color="danger";
      } else {
        if(this.sumaRespuestas<=10){
          this.nivel=this.intermedio;
          this.color="warning";
        } else {
          this.nivel=this.avanzado;
          this.color="success";
        }
        console.log('La lista de test está vacía');
      }
    }    }, error => {
      console.log(error);
    });
  }
  



}
