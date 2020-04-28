import { Component, OnInit } from '@angular/core';
import {FormationService} from "../service/formation.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  public formateurs: any;
  public size: number = 3;
  public currentPage: number = 0;
  public  totalPages: number;
  public  pages: Array<number>;
  private currentKeyword: string = '';
  public currentFormateur;
  public mode: number = 1;
  public title:string;


  constructor(private forService: FormationService, private router: Router,
              public authService: AuthenticationService, private route: ActivatedRoute) {}


  ngOnInit(): void {

  }
  /*// Pour la listage des Formations
  onGetFormateurs() {
    this.forService.getFormateurs(this.currentPage, this.size)
      .subscribe(data => {
        this.totalPages = data['page'].totalPages;
        this.pages = new  Array<number>(this.totalPages);
        this.formateurs = data;
      }, err => {
        console.log(err);
      });
  }*/
}
