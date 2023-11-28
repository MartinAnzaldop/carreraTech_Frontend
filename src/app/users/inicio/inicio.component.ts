import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComentarioService } from 'src/app/service/comentario.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
listaComentario:any=[];
constructor(private router: Router, private _Comentario: ComentarioService,) { }


  ngOnInit(): void {
    this.obtenerComentario();
  }

  obtenerComentario() {
    this._Comentario.getComentario().subscribe(
      data => {
        console.log(data);

        // Filtrar solo los comentarios con estatus "activado"
        this.listaComentario = data.filter((comentario: any) => comentario.estatus === 'activado');
      },
      error => {
        console.log(error);
      }
    );
  }
}
