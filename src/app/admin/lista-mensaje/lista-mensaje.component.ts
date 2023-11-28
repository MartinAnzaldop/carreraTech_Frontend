import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { COMENTARIO } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/service/comentario.service';

@Component({
  selector: 'app-lista-mensaje',
  templateUrl: './lista-mensaje.component.html',
  styleUrls: ['./lista-mensaje.component.css']
})
export class ListaMensajeComponent implements OnInit {

  listaComentario:COMENTARIO []=[];
  constructor(private router: Router, private _Comentario: ComentarioService, private  toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerComentario();
  }

  obtenerComentario(){
    this._Comentario.getComentario().subscribe(data=>{
      console.log(data);
      this.listaComentario=data;
    },error=>{
    console.log(error)
    })
  }
  eliminarComentario(id:any){
    this._Comentario.deleteComentario(id).subscribe(data=>{
    this.obtenerComentario();
    this.toastr.error('Comentario eliminado')
    this.router.navigate(['/listaComentario'])
    },error=>{
      console.log(error)
    })
  }
  modificarEstatus(id:any){
    this._Comentario.modificarEstatus(id).subscribe(data=>{
      this.obtenerComentario();
      this.toastr.success('Estatus modificado')
      this.router.navigate(['/listaComentario'])
    },error=>{
      console.log(error)
    })
  }
}

