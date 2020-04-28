import { Component, OnInit } from '@angular/core';
import {FormationService} from "../service/formation.service";
import {Router} from "@angular/router";
import {Formation} from "../model/formation.model";
import {ElementModel} from "../model/element.model";

@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html',
  styleUrls: ['./new-element.component.css']
})
export class NewElementComponent implements OnInit {
  public mode: number = 1;
  public currentElement: ElementModel;

  constructor(private forService: FormationService, private router: Router) { }

  ngOnInit(): void {
  }
  onSaveElement(data: any) {
    this.forService.saveResourceel(this.forService.host + '/elementForms', data)
      .subscribe(res => {
        this.currentElement = res;
        this.mode = 2;
      }, err => {
        console.log(err);
      });
  }
  onNewElement() {
    this.mode = 1;
  }
  onDefinedElement() {
    this.router.navigateByUrl("new-elements");
  }
}
