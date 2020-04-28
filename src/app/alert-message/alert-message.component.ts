import { Component, OnInit } from '@angular/core';
import {FormationService} from "../service/formation.service";
import {Cv} from "../model/cv.model";
import {AlerteMessageModel} from "../model/alerte-message.model";
import {Formation} from "../model/formation.model";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  public mode: number = 1;
  public currentAlerte: AlerteMessageModel;
  submitted =false;
  public alerte: any;
  public size: number = 5;
  public currentPage: number = 0;
  public  totalPages: number;
  public  pages: Array<number>;
  constructor(private alerteService: FormationService,public authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSaveAlerte(data: any) {
    this.alerteService.saveResourceAlerte(this.alerteService.host + '/alerteMessages', data)
      .subscribe(res => {
        this.submitted=true;
        this.currentAlerte = res;
        this.mode = 2;
      }, err => {
        console.log(err);
      });
  }
  onNewCv() {
    this.mode = 1;
  }
}
