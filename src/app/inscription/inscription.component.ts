import { Component, OnInit } from '@angular/core';
import {FormationService} from "../service/formation.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
import {ElementService} from "../service/element.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public inscriptions: any;
  public size: number = 5;
  public currentPage: number = 0;
  public  totalPages: number;
  public  pages: Array<number>;
  private currentKeyword: string = '';
  public currentInscription;
  public title:string;

  constructor(private forService: FormationService, private router: Router,
              public authService: AuthenticationService, private route: ActivatedRoute,
              public eltService:ElementService) {
    /*this.router.events.subscribe((val)=>{
      if (val instanceof NavigationEnd){
        let url = val.url;
        console.log(url);
        let d1=this.route.snapshot.params.d1;
        if(d1==1) {
          this.title="Selection"
          this.getElements("/elementForms/search/elementSelected");
        }else if (d1==2){
          let idForm=this.route.snapshot.params.d2;
          this.title="Les elements de la formation " +idForm;
          this.getElements('/element/'+idForm+'/inscriptions'); //pour recuperer les elements de la formation
        }
      }
    })*/
  }
  getElements(url) {
    this.forService.getResource(url)
      .subscribe(data => {
        this.inscriptions = data;
      }, error => {
        console.log(error);
      })
  }
  ngOnInit(): void {
    this.onGetInscrits();
  }
  onGetInscrits() {
    this.forService.getInscrits(this.currentPage, this.size)
      .subscribe(data => {
        this.totalPages = data['page'].totalPages;
        this.pages = new  Array<number>(this.totalPages);
        this.inscriptions = data;
       // console.log(data);
      }, err => {
        console.log(err);
      });
  }
  // Pour la pagignation
  onPageFormations(i: number) {
    this.currentPage = i;
    this.onGetInscrits()
  }


}
