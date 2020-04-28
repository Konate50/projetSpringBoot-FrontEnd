import { Component, OnInit } from '@angular/core';
import {FormationService} from "../service/formation.service";
import {Router} from "@angular/router";
import {Formation} from "../model/formation.model";

@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.css']
})
export class NewFormationComponent implements OnInit {
  public mode: number = 1;
  public currentFormation: Formation;
  submitted =false;

  constructor(private forService: FormationService, private router: Router) { }

  ngOnInit(): void {
  }
  onSaveFormation(data: any) {
    this.forService.saveResource(this.forService.host + '/formations', data)
      .subscribe(res => {
        this.submitted=true;
        this.currentFormation = res;
        this.mode = 2;
      }, err => {
        console.log(err);
      });
  }
  onNewFormation() {
    this.mode = 1;
  }


}
