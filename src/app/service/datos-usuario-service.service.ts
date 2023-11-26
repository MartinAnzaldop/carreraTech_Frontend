import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioServiceService {

  private email: string = '';

constructor() { }

setEmail(email: string) {
  this.email = email;
}

getEmail() {
  return this.email;
}
}