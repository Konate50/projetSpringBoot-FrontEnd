import { Component, OnInit } from '@angular/core';
import {FormationService} from "../service/formation.service";
import {Router} from "@angular/router";
import {Formation} from "../model/formation.model";
import {EvaluateModel} from "../model/evaluate.model";

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  etablissmant:string;formateur:string;contenu:string;cours:string;
  result:number;note:number;

  AddNumber() {
    this.note= parseInt(this.etablissmant)+parseInt(this.formateur)+parseInt(this.contenu);
    this.result =this.note/3;
    console.log(this.note);
  }

  public mode: number = 1;
  public currentEv: EvaluateModel;
  constructor(private evalService: FormationService, private router: Router) { }

  ngOnInit(): void {
  }
  onSaveEvaluation(data: any) {
    this.evalService.saveEvaluate(this.evalService.host + '/evaluations', data)
      .subscribe(res => {
        this.currentEv = res;
        console.log()
        this.mode = 2;
      }, err => {
        console.log(err);
      });
  }
  onNewEvaluation() {
    this.mode = 1;
  }
}
