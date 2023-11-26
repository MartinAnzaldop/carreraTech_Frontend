import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TESTROL } from 'src/app/models/testRol';
import { ToastrService } from 'ngx-toastr';

import { TestNivelService } from 'src/app/service/test-nivel.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testForm:FormGroup;
  usuario="";
  datoGuardado=""
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


  constructor(private fb: FormBuilder, private  router: Router,
   private aRouter: ActivatedRoute, private _Test: TestNivelService, private  toastr: ToastrService) { 
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
  }


  agregarTest(){
    const emailData = localStorage.getItem('email');
      if (emailData) {
        this.datoGuardado = JSON.parse(emailData);
        
    const TESTROL: TESTROL ={
      usuario: this.datoGuardado,
        
      nombre: this.testForm.get('nombre')?.value,
      edad: this.testForm.get('edad')?.value,
      carrera: this.testForm.get('carrera')?.value,
      pregunta1: this.pregunta1,
      pregunta2: this.pregunta2,
      pregunta3: this.pregunta3,
      pregunta4: this.pregunta4,
      pregunta5: this.pregunta5,
      pregunta6: this.pregunta6,
      pregunta7: this.pregunta7,
      pregunta8: this.pregunta8,
      pregunta9: this.pregunta9,
      pregunta10: this.pregunta10,
      pregunta11: this.pregunta11,
      pregunta12: this.pregunta12,
      pregunta13: this.pregunta13,
      pregunta14: this.pregunta14,
      pregunta15: this.pregunta15,
      respuesta1: this.testForm.get('respuesta1')?.value,
      respuesta2: this.testForm.get('respuesta2')?.value,
      respuesta3: this.testForm.get('respuesta3')?.value,
      respuesta4: this.testForm.get('respuesta4')?.value,
      respuesta5: this.testForm.get('respuesta5')?.value,
      respuesta6: this.testForm.get('respuesta6')?.value,
      respuesta7: this.testForm.get('respuesta7')?.value,
      respuesta8: this.testForm.get('respuesta8')?.value,
      respuesta9: this.testForm.get('respuesta9')?.value,
      respuesta10: this.testForm.get('respuesta10')?.value,
      respuesta11: this.testForm.get('respuesta11')?.value,
      respuesta12: this.testForm.get('respuesta12')?.value,
      respuesta13: this.testForm.get('respuesta13')?.value,
      respuesta14: this.testForm.get('respuesta14')?.value,
      respuesta15: this.testForm.get('respuesta15')?.value,
    }
    this._Test.guardarTest(TESTROL).subscribe(dato=>{
      this.toastr.success('Test contestado')
      this.router.navigate(['/resultado'])
    }, error=>{
    console.log(error);
    
    })
    
    }
}
}