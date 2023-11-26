import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TESTROL } from 'src/app/models/testRol';
import { TestNivelService } from 'src/app/service/test-nivel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-encuestas',
  templateUrl: './lista-encuestas.component.html',
  styleUrls: ['./lista-encuestas.component.css']
})
export class ListaEncuestasComponent implements OnInit {
  listaTest:TESTROL []=[];
  constructor(private router: Router, private _Test: TestNivelService, private  toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerTest();
  }

  obtenerTest(){
    this._Test.getTest().subscribe(data=>{
      console.log(data);
      this.listaTest=data;
    },error=>{
    console.log(error)
    })
  }
  eliminarTest(id:any){
    this._Test.deleteTest(id).subscribe(data=>{
    this.obtenerTest();
    this.toastr.error('Test eliminado')
    this.router.navigate(['/listaEncuestas'])
    },error=>{
      console.log(error)
    })
  }
}
