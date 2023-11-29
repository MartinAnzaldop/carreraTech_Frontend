import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatosUsuarioServiceService } from 'src/app/service/datos-usuario-service.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

 
  loginUsuario: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private  toastr: ToastrService,
    private router: Router,
    private _user: DatosUsuarioServiceService
    ) {
      this.loginUsuario = this.fb.group({
        email: ['',[Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    }) }

  ngOnInit(): void {
  }

  login(){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      console.log(user);
      if(user.user?.emailVerified){
        localStorage.setItem('email', JSON.stringify(email));
        this.toastr.success('Bienvenido');
          this.router.navigate(['/inicioAdmin']);
      }else {
        this.router.navigate(['/verificacionCorreo']);
      }
    }).catch((error) => {
      this.loading = false;
      this.toastr.error( 'Error al inciar sesion');
    })
  }

  isChatbotVisible = false;

  toggleChatbot(): void {
    this.isChatbotVisible = !this.isChatbotVisible;
  }

}
