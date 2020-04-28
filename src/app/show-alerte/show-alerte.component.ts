import { Component, OnInit } from '@angular/core';
import {FormationService} from "../service/formation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-show-alerte',
  templateUrl: './show-alerte.component.html',
  styleUrls: ['./show-alerte.component.css']
})
export class ShowAlerteComponent implements OnInit {
  public showalerte: any;
  public size: number = 3;
  public currentPage: number = 0;
  public  totalPages: number;
  public  pages: Array<number>;
  private currentKeyword: string = '';
  public currentFormation;
  public mode: number = 1;
  constructor(private showService: FormationService, private router: Router,
              public authService: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onGetAlarte();
  }
  onGetAlarte() {
    this.showService.getAleteMessages(this.currentPage, this.size)
      .subscribe(data => {
        this.totalPages = data['page'].totalPages;
        this.pages = new  Array<number>(this.totalPages);
         this.showalerte = data;
      }, err => {
        console.log(err);
      });
  }
}
