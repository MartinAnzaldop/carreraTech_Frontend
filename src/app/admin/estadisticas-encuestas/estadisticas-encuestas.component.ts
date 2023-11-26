import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { TESTROL } from 'src/app/models/testRol';
import { TestNivelService } from 'src/app/service/test-nivel.service';
 
@Component({
  selector: 'app-estadisticas-encuestas',
  templateUrl: './estadisticas-encuestas.component.html',
  styleUrls: ['./estadisticas-encuestas.component.css']
})
export class EstadisticasEncuestasComponent implements OnInit {
  testForm:FormGroup;
  listaTest:TESTROL []=[];
  usuario="";
  datoGuardado=""
  res7:any
  res1:any
  res2:any
  res3:any
  res4:any
  res5:any
  res6:any
  res8:any
  res9:any
  res10:any
  res11:any
  res12:any
  res13:any
  res14:any
  res15:any
  
 nombre: string='';
    edad: number=0;
    carrera: string='';
    pregunta1:string='¿Qué es un algoritmo?';
    pregunta2:string='En programación, ¿qué es una variable?';
    pregunta3:string='¿Cuál es la diferencia entre una lista y una tupla en Python?';
    pregunta4:string='¿Qué es el ámbito (scope) de una variable en programación?';
    pregunta5:string='¿Qué hace el siguiente bucle en Python? (for i in range(5):print(i)';
    pregunta6:string='¿Cómo se llama la estructura de control que permite ejecutar un bloque de código repetidamente mientras se cumple una condición?';
    pregunta7:string='¿Cuál es la función de un "if-else statement" en programación?';
    pregunta8:string='En el contexto de programación, ¿qué es la recursividad?';
    pregunta9:string='¿Cómo se evita un bucle infinito?';
    pregunta10:string='¿Qué es la indexación en el contexto de las listas o arreglos?';
    pregunta11:string='¿Qué es la herencia en programación orientada a objetos?';
    pregunta12:string='¿Cuál es el propósito principal de las excepciones en programación?';
    pregunta13:string='¿Qué es un ORM (Mapeo Objeto-Relacional) en el contexto de bases de datos?';
    pregunta14:string='¿Qué es la programación funcional?';
    pregunta15:string='¿Cuál es la diferencia principal entre una llave primaria y una llave foránea en una base de datos relacional?';
    respuesta1:number=0;
    respuesta2:number=0;
    respuesta3:number=0;
    respuesta4:number=0;
    respuesta5:number=0;
    respuesta6:number=0;
    respuesta7:number=0;
    respuesta8:number=0;
    respuesta9:number=0;
    respuesta10:number=0;
    respuesta11:number=0;
    respuesta12:number=0;
    respuesta13:number=0;
    respuesta14:number=0;
    respuesta15:number=0;
  constructor(
    private activateRouter: ActivatedRoute,
    private _Test: TestNivelService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    ) {
    this.testForm=this.fb.group({
      usuario:['', Validators.required],
      nombre:['', Validators.required],
      edad:['', Validators.required],
      carrera:['', Validators.required],
      pregunta1:['', Validators.required],
      pregunta2:['', Validators.required],
      pregunta3:['', Validators.required],
      pregunta4:['', Validators.required],
      pregunta5:['', Validators.required],
      pregunta6:['', Validators.required],
      pregunta7:['', Validators.required],
      pregunta8:['', Validators.required],
      pregunta9:['', Validators.required],
      pregunta10:['', Validators.required],
      pregunta11:['', Validators.required],
      pregunta12:['', Validators.required],
      pregunta13:['', Validators.required],
      pregunta14:['', Validators.required],
      pregunta15:['', Validators.required],
      respuesta1:['', Validators.required],
      respuesta2:['', Validators.required],
      respuesta3:['', Validators.required],
      respuesta4:['', Validators.required],
      respuesta5:['', Validators.required],
      respuesta6:['', Validators.required],
      respuesta7:['', Validators.required],
      respuesta8:['', Validators.required],
      respuesta9:['', Validators.required],
      respuesta10:['', Validators.required],
      respuesta11:['', Validators.required],
      respuesta12:['', Validators.required],
      respuesta13:['', Validators.required],
      respuesta14:['', Validators.required],
      respuesta15:['', Validators.required],
   })
  }

  ngOnInit(): void {
    this.obtenerRespuesta()
    
  }

  obtenerRespuesta() {
    this._Test.getTest().subscribe(
      data => {
        console.log(data);
        this.listaTest = data;
  
        // Realizar el conteo de cuántos 1 hay en la respuesta7
        this.contarRespuestaSiete();
        this.contarRespuestaUno();
        this.contarRespuestaDos();
        this.contarRespuestaTres();
        this.contarRespuestaCuatro();
        this.contarRespuestaCinco();
        this.contarRespuestaSeis();
        this.contarRespuestaOcho();
        this.contarRespuestaNueve();
        this.contarRespuestaDiez();
        this.contarRespuestaOnce();
        this.contarRespuestaDoce();
        this.contarRespuestaTrece();
        this.contarRespuestaCatorce();
        this.contarRespuestaQuince();
        
      },
      error => {
        console.log(error);
      }
    );
  }
  
  contarRespuestaSiete() {
    let conteoRespuestaSiete = 0;
    this.listaTest.forEach(test => {
      if (test.respuesta7 === 1) {
        conteoRespuestaSiete++;
        this.res7=conteoRespuestaSiete
      }else{
        this.res7=0
      }
    });
  }
  
  contarRespuestaUno() {
    let conteoRespuestaSiete = 0;
    this.listaTest.forEach(test => {
      if (test.respuesta1 === 1) {
        conteoRespuestaSiete++;
        this.res1=conteoRespuestaSiete
      }
      else{
        this.res1=0
      }
    });
    
  }
  contarRespuestaDos() {
    let conteoRespuestaSiete = 0;
    this.listaTest.forEach(test => {
      if (test.respuesta2 === 1) {
        conteoRespuestaSiete++;
        this.res2=conteoRespuestaSiete
      }else{
        this.res2=0
      }
    });
  }
  contarRespuestaTres() {
    let conteoRespuestaSiete = 0;
    this.listaTest.forEach(test => {
      if (test.respuesta3 === 1) {
        conteoRespuestaSiete++;
        this.res3=conteoRespuestaSiete
      }else{
        this.res3=0
      }
    });
    
  }
  contarRespuestaCuatro() {
    let conteoRespuestaSiete = 0;
    this.listaTest.forEach(test => {
      if (test.respuesta4 === 1) {
        conteoRespuestaSiete++;
        this.res4=conteoRespuestaSiete
      }else{
        this.res4=0
      }
    });
    console.log(`Cantidad de 1 en respuesta7: ${conteoRespuestaSiete}`);
  }
  contarRespuestaCinco() {
    let conteoRespuestaSiete = 0;
    this.listaTest.forEach(test => {
      if (test.respuesta5 === 1) {
        conteoRespuestaSiete++;
        this.res5=conteoRespuestaSiete
      }else{
        this.res5=0
      }
    });
  }
    contarRespuestaSeis() {
      let conteoRespuestaSiete = 0;
      this.listaTest.forEach(test => {
        if (test.respuesta6 === 1) {
          conteoRespuestaSiete++;
          this.res6=conteoRespuestaSiete
        }else{
          this.res6=0
        }
      });
   
  }
    contarRespuestaOcho() {
      let conteoRespuestaSiete = 0;
      this.listaTest.forEach(test => {
        if (test.respuesta8 === 1) {
          conteoRespuestaSiete++;
          this.res8=conteoRespuestaSiete
        }else{
          this.res8=0
        }
      });
   
  }
    contarRespuestaNueve() {
      let conteoRespuestaSiete = 0;
      this.listaTest.forEach(test => {
        if (test.respuesta9 === 1) {
          conteoRespuestaSiete++;
          this.res9=conteoRespuestaSiete
        }else{
          this.res9=0
        }
      });
   
  }
    contarRespuestaDiez() {
      let conteoRespuestaSiete = 0;
      this.listaTest.forEach(test => {
        if (test.respuesta10 === 1) {
          conteoRespuestaSiete++;
          this.res10=conteoRespuestaSiete
        }else{
          this.res10=0
        }
      });
   
  }
    contarRespuestaOnce() {
      let conteoRespuestaSiete = 0;
      this.listaTest.forEach(test => {
        if (test.respuesta11 === 1) {
          conteoRespuestaSiete++;
          this.res11=conteoRespuestaSiete
        }else{
          this.res11=0
        }
      });
   
  }
    contarRespuestaDoce() {
      let conteoRespuestaSiete = 0;
      this.listaTest.forEach(test => {
        if (test.respuesta12 === 1) {
          conteoRespuestaSiete++;
          this.res12=conteoRespuestaSiete
        }else{
          this.res12=0
        }
      });
   
  }
    contarRespuestaTrece() {
      let conteoRespuestaSiete = 0;
      this.listaTest.forEach(test => {
        if (test.respuesta13 === 1) {
          conteoRespuestaSiete++;
          this.res13=conteoRespuestaSiete
        
        }
      });
   
  }
    contarRespuestaCatorce() {
      let conteoRespuestaSiete = 0;
      this.listaTest.forEach(test => {
        if (test.respuesta14 === 1) {
          conteoRespuestaSiete++;
          this.res14=conteoRespuestaSiete
        }else{
          this.res14=0
        }
      });
   
  }
    contarRespuestaQuince() {
      let conteoRespuestaSiete = 0;
      this.listaTest.forEach(test => {
        if (test.respuesta15 === 1) {
          conteoRespuestaSiete++;
          this.res15=conteoRespuestaSiete
        }else{
          this.res15=0
        }
      });
   
  }

    
  
  


}
  
