import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { COMENTARIO } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/service/comentario.service';
import { TestNivelService } from 'src/app/service/test-nivel.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css'],
})
export class ComentarioComponent implements OnInit {
  comentarioForm: FormGroup;
  usuario = '';
  nombre: string = '';
  asunto: string = '';
  mensaje: string = '';
  datoGuardado: any;
 
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
    private _Comentario: ComentarioService,
    private toastr: ToastrService
  ) {
    this.comentarioForm=this.fb.group({
      usuario:['', Validators.required],
      nombre:['', Validators.required],
      asunto:['', Validators.required],
      mensaje:['', Validators.required],
      
    })
  }
  ngOnInit(): void {}

  agregarComentario(){
    const emailData = localStorage.getItem('email');
      if (emailData) {
        this.datoGuardado = JSON.parse(emailData);
        
    const COMENTARIO: COMENTARIO ={
      usuario: this.datoGuardado,
        
      nombre: this.comentarioForm.get('nombre')?.value,
      asunto: this.comentarioForm.get('asunto')?.value,
      estatus: this.comentarioForm.get('desactivado')?.value,
      mensaje: this.comentarioForm.get('mensaje')?.value,
    }
      this._Comentario.guardarComentario(COMENTARIO).subscribe(dato=>{
        this.toastr.success('Comentario enviado')
        this.router.navigate(['/dashboard'])
      }, error=>{
      console.log(error);
      })
      }
  }
  
}

