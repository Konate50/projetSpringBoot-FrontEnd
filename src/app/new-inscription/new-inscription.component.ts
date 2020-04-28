import { Component, OnInit } from '@angular/core';
import {FormationService} from "../service/formation.service";
import {Router} from "@angular/router";
import {Inscription} from "../model/inscription.model";
import {ElementModel} from "../model/element.model";

@Component({
  selector: 'app-new-inscription',
  templateUrl: './new-inscription.component.html',
  styleUrls: ['./new-inscription.component.css']
})
export class NewInscriptionComponent implements OnInit {
  public mode: number = 1;
  public currentInscrits: Inscription;
  submitted =false;
  private currentId: number;


  constructor(private forService: FormationService, private router: Router) { }

  ngOnInit(): void {
  }
  onSaveInscrits(data: any) {
    this.forService.saveResourcepi(this.forService.host + '/inscriptions', data)
      .subscribe(res => {
        this.submitted=true;
        console.log(res);
        this.currentInscrits = res;
        this.mode = 2;
      }, err => {
        console.log(err);
      });
  }
  onNewInscrits() {
    this.mode = 1;
  }
}
