import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private  users=[
    {username: 'admin', password:'1234', roles:['ADMIN','USER']},
    {username: 'user1', password:'1234', roles:['USER']},
    {username: 'user2', password:'1234', roles:['USER']},
  ]
  public isAuthenticated: boolean;
  public userauthenticated;
  public token: string;

  constructor() { }

  public login(username:string, password:string){
    let user; // valeur par defaut est undefined
    this.users.forEach(u=>{
      if(u.username==username && u.password==password){
        user = u;
        this.token = btoa(JSON.stringify({username: u.username, roles: u.roles}));
      }
    });
    if (user){
      this.isAuthenticated = true;
      this.userauthenticated=user;
    }else {
      this.isAuthenticated = false;
      this.userauthenticated = undefined;
    }
  }
  public isAdmin(){
    if (this.userauthenticated){
      if (this.userauthenticated.roles.indexOf('ADMIN') >-1){
        return true;
      }
      return false;
    }
  }
  //Pour enregistrer user a fin qu'il ne se s'authentifi tout le temps
  /*public saveAuthenticatedUser(){
    if (this.userauthenticated){
      localStorage.setItem('autUser',this.userauthenticated);
    }
  }*/
  //Pour enregistrer user a fin qu'il ne se s'authentifi tout le temps,la meilleur
  // de l'enregistrer c'est de le faire dans un token
  public saveAuthenticatedUser() {
    if (this.userauthenticated) {
      //localStorage.setItem('autToken', btoa(JSON.stringify(this.token))); a utiliser si le token est declarer comme un object
      localStorage.setItem('autToken', this.token);
    }
  }

  // Pour charger les donnees de user une fois authentifie lors du demarage
  public  loadAuthenticatedUserFromStorage(){
    let t = localStorage.getItem('autToken');
    if (t){
      let  user = JSON.parse(atob(t));
      this.userauthenticated = user;
      this.token = t;
    }
  }
  //Pour supprimer le localStorage une fois user est deconnecter
  public removeTokenFromLocalStorage(){
    localStorage.removeItem('autToken');
    this.isAuthenticated = false;
    this.token = undefined;
    this.userauthenticated = undefined;
  }
}
