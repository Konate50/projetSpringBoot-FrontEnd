import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormationService} from "../service/formation.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Formation} from "../model/formation.model";
import {EvaluationComponent} from "../evaluation/evaluation.component";

@Component({
  selector: 'app-plan',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  public cvs: any;
  public size: number = 5;
  public currentPage: number = 0;
  public  totalPages: number;
  public  pages: Array<number>;
  private currentKeyword: string = '';
  public currentFormation :Formation;
  public title:string;
  //public grate:number =this.evalComp.note;

  constructor(private plaService: FormationService, private router: Router, public route: ActivatedRoute) {}

  ngOnInit(): void {
    /*let url = atob(this.route.snapshot.params.url);
  console.log(url);*/
    this.onGetPlans();
  }

  onGetPlans() {
    this.plaService.getPlans(this.currentPage, this.size)
      .subscribe(data =>{
        this.totalPages = data['page'].totalPages;
        this.pages = new  Array<number>(this.totalPages);
        this.cvs = data;
      },error => {
        console.log(error);
      })
  }



}
