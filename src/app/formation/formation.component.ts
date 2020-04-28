import { Component, OnInit } from '@angular/core';
import {FormationService} from "../service/formation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
import {Formation} from "../model/formation.model";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  public formations: any;
  public size: number = 3;
  public currentPage: number = 0;
  public  totalPages: number;
  public  pages: Array<number>;
  private currentKeyword: string = '';
  public currentFormation;
  public mode: number = 1;

  constructor(private forService: FormationService, private router: Router,
              public authService: AuthenticationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
   this.onGetFormations();
  }

  // Pour la listage des Formations
  onGetFormations() {
    this.forService.getFormations(this.currentPage, this.size)
      .subscribe(data => {
        this.totalPages = data['page'].totalPages;
        this.pages = new  Array<number>(this.totalPages);
        this.formations = data;
      }, err => {
        console.log(err);
      });
  }
  // Pour la pagignation
  onPageFormations(i: number) {
    this.currentPage = i;
     this.chercherFormation();
  }
  onCvByFormateur(p) {
    this.router.navigateByUrl("/cv");
  }

  getElementByForm(p) {
    this.currentFormation=p;
    this.router.navigateByUrl('/element/2/' + p.id);
  }
  onChercher(form: any){
    this.currentPage=0;
    this.currentKeyword=form.keyword;
    this.chercherFormation();
  }

  chercherFormation() {
    this.forService.getFormByKeywork(this.currentKeyword,this.currentPage, this.size)
      .subscribe(data => {
        this.totalPages = data['page'].totalPages;
        this.pages = new  Array<number>(this.totalPages);
        this.formations = data;
      }, err => {
        console.log(err);
      });
    //console.log(value);
  }
  onDeleteForms(p) {
    let conf = confirm('Êtes vous sûre de vouloir supprimer?');
    if (conf) {
      this.forService.deleteResource(p._links.self.href)
        .subscribe(data => {
          alert('Suppression effectueé avec succes');
          this.chercherFormation();
        }, err => {
          console.log(err);
        });
    }
  }
  onEditForms(p) {
    let url = p._links.self.href;
    this.router.navigateByUrl('/edit-formation/' + btoa(url));
  }
}
