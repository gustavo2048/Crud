import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';
import{Paciente}from '../Modelo/Paciente';
import { Administrador } from '../Modelo/Administrador';
import { Vacunador } from '../Modelo/Vacunador';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/users';  
  checkLog(email:string){
    return this.http.get<Paciente>(`${this.url}/userExist/`+email);
  }

  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
    }  

    createUser(user:Paciente){
      return this.http.post<Paciente>(this.url,user);
    }

    checkUser(email:string){
      return this.http.get<Paciente>(`${this.url}/userExist/`+email);     
    }
}
