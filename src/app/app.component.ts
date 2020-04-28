import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./service/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'formation-web';
  private currentFormation;

  constructor(private router: Router,public authService: AuthenticationService) {
  }

  onLogout() {
    this.router.navigateByUrl("/login")
  }

  ngOnInit(): void {
    this.authService.removeTokenFromLocalStorage();
    this.authService.loadAuthenticatedUserFromStorage();
  }
  onDefinedPlan() {
    this.router.navigateByUrl("new-formation");
  }

  onDefinedElement() {
    this.router.navigateByUrl("new-elements");
  }
  onDefinedInscrits() {
    this.router.navigateByUrl("inscriptions");
  }
  onDefinedCv() {
    this.router.navigateByUrl("new-cv");
  }
  onDefinedFormations() {
    this.router.navigateByUrl("formations");
  }

  onSelectedForm() {
    this.currentFormation= undefined
    this.router.navigateByUrl("formations");

  }
}
