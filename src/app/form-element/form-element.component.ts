import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/formation.model";
import {FormationService} from "../service/formation.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ElementModel} from "../model/element.model";
import {ElementService} from "../service/element.service";

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {
  public elements: any;
  public size: number = 1;
  public currentPage: number = 0;
  public  totalPages: number;
  public  pages: Array<number>;
  private currentKeyword: string = '';
  public currentElement :Formation;
  public currentFormation;
  public title:string;
  constructor(private eletService: FormationService, private router: Router,
              public route: ActivatedRoute,public eltService:ElementService) {
    this.router.events.subscribe((val)=>{
      if (val instanceof NavigationEnd){
        let url = val.url;
        console.log(url);
        let p1=this.route.snapshot.params.p1;
        if(p1==1) {
          this.title="Selection"
          this.getElements("/elementForms/search/elementSelected");
        }else if (p1==2){
          let idForm=this.route.snapshot.params.p2;
          this.title="Les elements de la formation " +idForm;
          this.getElements('/formations/'+idForm+'/elementForms'); //pour recuperer les elements de la formation
        }
      }
    })
  }

  ngOnInit(): void {
  }
  getElements(url) {
    this.eletService.getResource(url)
      .subscribe(data => {
        this.elements = data;
      }, error => {
        console.log(error);
      })
  }
  /*getElementByForm(p) {
    this.currentFormation=p;
    this.router.navigateByUrl('/element/2/' + p.id);
  }*/
  /*onAddElementToInscrit(p: ElementModel) {
   this.eltService.addElementToInscrit(p);
  }
*/
  onInscrire(p) {
    this.router.navigateByUrl("new-inscriptions");
  }
}
