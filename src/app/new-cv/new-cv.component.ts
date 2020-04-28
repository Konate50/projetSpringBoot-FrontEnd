import { Component, OnInit } from '@angular/core';
import {FormationService} from "../service/formation.service";
import {Cv} from "../model/cv.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-cv.component.html',
  styleUrls: ['./new-cv.component.css']
})
export class NewCvComponent implements OnInit {
  public mode: number = 1;
  public currentCv: Cv;

  constructor(private plaService: FormationService,private router:Router) { }

  ngOnInit(): void {
  }

  onSaveCv(data: any) {
    this.plaService.saveResourcep(this.plaService.host + '/cVFormateurs', data)
      .subscribe(res => {
        this.currentCv = res;
        this.mode = 2;
      }, err => {
        console.log(err);
      });
  }
  onNewCv() {
    this.mode = 1;
  }
  onViewCv() {
    this.router.navigateByUrl("cv");
  }
}
